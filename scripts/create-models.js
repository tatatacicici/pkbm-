const fs = require('fs');
const path = require('path');

// Read extracted schema
const schema = JSON.parse(fs.readFileSync('scripts/extracted-schema.json', 'utf-8'));

// Helper functions
function toPascalCase(str) {
  return str.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function sanitizeEnumValue(value) {
  return value
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/^(\d)/, '_$1')
    .toUpperCase();
}

// Map SQL types to Sequelize types
function mapSqlTypeToSequelize(sqlType, columnName) {
  const type = sqlType.toLowerCase().trim();
  
  if (type.includes('uuid')) return { type: 'DataTypes.UUID', needsImport: false };
  if (type.includes('character varying') || type.includes('varchar')) {
    const lengthMatch = type.match(/\((\d+)\)/);
    if (lengthMatch) {
      return { type: `DataTypes.STRING(${lengthMatch[1]})`, needsImport: false };
    }
    return { type: 'DataTypes.STRING', needsImport: false };
  }
  if (type === 'text') return { type: 'DataTypes.TEXT', needsImport: false };
  if (type.includes('timestamp')) return { type: 'DataTypes.DATE', needsImport: false };
  if (type === 'date') return { type: 'DataTypes.DATEONLY', needsImport: false };
  if (type === 'boolean') return { type: 'DataTypes.BOOLEAN', needsImport: false };
  if (type.includes('integer') && !type.includes('big')) return { type: 'DataTypes.INTEGER', needsImport: false };
  if (type.includes('bigint')) return { type: 'DataTypes.BIGINT', needsImport: false };
  if (type.includes('smallint')) return { type: 'DataTypes.SMALLINT', needsImport: false };
  if (type.includes('numeric') || type.includes('decimal')) return { type: 'DataTypes.DECIMAL', needsImport: false };
  if (type.includes('real') || type.includes('double')) return { type: 'DataTypes.DOUBLE', needsImport: false };
  if (type.includes('json') && !type.includes('jsonb')) return { type: 'DataTypes.JSON', needsImport: false };
  if (type.includes('jsonb')) return { type: 'DataTypes.JSONB', needsImport: false };
  if (type.includes('enum_')) {
    const enumName = type.match(/enum_\w+/)?.[0];
    if (enumName && schema.enums[enumName]) {
      const pascalCase = toPascalCase(enumName.replace('enum_', ''));
      return { 
        type: `DataTypes.ENUM(...Object.values(${pascalCase}Enum))`, 
        needsImport: true,
        enumName: pascalCase
      };
    }
  }
  
  return { type: 'DataTypes.STRING', needsImport: false };
}

// Generate enum files
function generateEnums() {
  const enumsDir = 'src/models/enums';
  if (!fs.existsSync(enumsDir)) {
    fs.mkdirSync(enumsDir, { recursive: true });
  }

  const enumExports = [];

  for (const [enumName, values] of Object.entries(schema.enums)) {
    const pascalName = toPascalCase(enumName.replace('enum_', ''));
    const fileName = `${pascalName}Enum.ts`;
    
    const enumContent = `export enum ${pascalName}Enum {
${values.map(v => `  ${sanitizeEnumValue(v)} = '${v}'`).join(',\n')}
}
`;
    
    fs.writeFileSync(path.join(enumsDir, fileName), enumContent);
    enumExports.push({ name: pascalName, fileName });
  }

  // Create index file for enums
  const indexContent = enumExports
    .map(e => `export { ${e.name}Enum } from './${e.name}Enum';`)
    .join('\n') + '\n';
  
  fs.writeFileSync(path.join(enumsDir, 'index.ts'), indexContent);

  console.log(`Generated ${enumExports.length} enum files`);
  return enumExports;
}

// Generate model files
function generateModels() {
  const modelsDir = 'src/models/tables';
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
  }

  const modelExports = [];

  for (const [tableName, columns] of Object.entries(schema.tables)) {
    if (tableName === 'SequelizeMeta') continue; // Skip Sequelize meta table

    const className = toPascalCase(tableName);
    const fileName = `${className}.ts`;
    
    // Determine which enums this model needs
    const neededEnums = new Set();
    const attributes = [];

    for (const col of columns) {
      const typeInfo = mapSqlTypeToSequelize(col.type, col.name);
      if (typeInfo.needsImport && typeInfo.enumName) {
        neededEnums.add(typeInfo.enumName);
      }

      const isNotNull = col.line.includes('NOT NULL');
      const isAutoIncrement = col.line.includes('nextval') || (col.name === 'id' && col.type.includes('integer'));
      const isPrimaryKey = col.line.includes('PRIMARY KEY') || col.name === 'id';
      const hasDefault = col.line.includes('DEFAULT');

      let attributeOptions = [`type: ${typeInfo.type}`];
      
      if (isPrimaryKey) {
        attributeOptions.push('primaryKey: true');
      }
      if (isAutoIncrement) {
        attributeOptions.push('autoIncrement: true');
      }
      if (!isNotNull && !isPrimaryKey) {
        attributeOptions.push('allowNull: true');
      } else if (isNotNull && !hasDefault && !isPrimaryKey) {
        attributeOptions.push('allowNull: false');
      }

      attributes.push({
        name: col.name,
        options: attributeOptions.join(', ')
      });
    }

    // Generate model file
    const enumImports = Array.from(neededEnums).length > 0
      ? `import { ${Array.from(neededEnums).map(e => `${e}Enum`).join(', ')} } from '../enums';\n`
      : '';

    const modelContent = `import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
${enumImports}
export interface ${className}Attributes {
${attributes.map(a => `  ${a.name}?: any;`).join('\n')}
}

export type ${className}CreationAttributes = Optional<${className}Attributes, 'id'>;

export class ${className} extends Model<${className}Attributes, ${className}CreationAttributes> implements ${className}Attributes {
${attributes.map(a => `  declare ${a.name}?: any;`).join('\n')}

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ${className} {
    ${className}.init(
      {
${attributes.map(a => `        ${a.name}: { ${a.options} }`).join(',\n')}
      },
      {
        sequelize,
        tableName: '${tableName}',
        timestamps: ${columns.some(c => c.name === 'createdAt' || c.name === 'created_at') ? 'true' : 'false'},
        underscored: ${tableName.includes('_') ? 'true' : 'false'},
      }
    );
    return ${className};
  }
}
`;

    fs.writeFileSync(path.join(modelsDir, fileName), modelContent);
    modelExports.push({ className, tableName, fileName });
  }

  console.log(`Generated ${modelExports.length} model files`);
  return modelExports;
}

// Generate init-models file
function generateInitModels(modelExports) {
  const initContent = `import { Sequelize } from 'sequelize';
${modelExports.map(m => `import { ${m.className} } from './tables/${m.className}';`).join('\n')}

export interface Models {
${modelExports.map(m => `  ${m.className}: typeof ${m.className};`).join('\n')}
}

export function initModels(sequelize: Sequelize): Models {
  // Initialize all models
${modelExports.map(m => `  ${m.className}.initModel(sequelize);`).join('\n')}

  // Define associations
  ${generateAssociations()}

  return {
${modelExports.map(m => `    ${m.className},`).join('\n')}
  };
}

export {
${modelExports.map(m => `  ${m.className},`).join('\n')}
};
`;

  fs.writeFileSync('src/models/init-models.ts', initContent);
  console.log('Generated init-models.ts');
}

// Generate associations based on foreign keys
function generateAssociations() {
  const associations = [];
  const processedRelations = new Set();

  for (const fk of schema.foreignKeys) {
    const sourceClass = toPascalCase(fk.table);
    const targetClass = toPascalCase(fk.referencedTable);
    const relationKey = `${fk.table}-${fk.column}-${fk.referencedTable}`;

    if (processedRelations.has(relationKey)) continue;
    processedRelations.add(relationKey);

    // belongsTo relation
    const asName = toCamelCase(fk.column.replace(/_id$/, '').replace(/Id$/, ''));
    associations.push(`  // ${sourceClass} belongsTo ${targetClass}`);
    associations.push(`  ${sourceClass}.belongsTo(${targetClass}, { foreignKey: '${fk.column}', as: '${asName}' });`);

    // hasMany or hasOne relation (reverse)
    const reverseAsName = toCamelCase(fk.table);
    associations.push(`  ${targetClass}.hasMany(${sourceClass}, { foreignKey: '${fk.column}', as: '${reverseAsName}' });`);
    associations.push('');
  }

  return associations.join('\n  ');
}

// Main execution
console.log('Starting model generation...');
console.log('');

generateEnums();
console.log('');

const modelExports = generateModels();
console.log('');

generateInitModels(modelExports);
console.log('');

console.log('✅ All models generated successfully!');
console.log(`📁 Enums: src/models/enums/`);
console.log(`📁 Models: src/models/tables/`);
console.log(`📄 Init: src/models/init-models.ts`);
