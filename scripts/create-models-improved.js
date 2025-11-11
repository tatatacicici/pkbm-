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

// Map SQL types to TypeScript types
function mapSqlTypeToTS(sqlType) {
  const type = sqlType.toLowerCase().trim();
  
  if (type.includes('uuid')) return 'string';
  if (type.includes('character varying') || type.includes('varchar')) return 'string';
  if (type === 'text') return 'string';
  if (type.includes('timestamp')) return 'Date';
  if (type === 'date') return 'Date';
  if (type === 'boolean') return 'boolean';
  if (type.includes('integer') || type.includes('bigint') || type.includes('smallint')) return 'number';
  if (type.includes('numeric') || type.includes('decimal')) return 'number';
  if (type.includes('real') || type.includes('double')) return 'number';
  if (type.includes('json')) return 'any';
  if (type.includes('enum_')) {
    const enumName = type.match(/enum_\w+/)?.[0];
    if (enumName && schema.enums[enumName]) {
      const pascalCase = toPascalCase(enumName.replace('enum_', ''));
      return `${pascalCase}Enum`;
    }
  }
  
  return 'string';
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

// Generate model files with proper TypeScript types
function generateModels() {
  const modelsDir = 'src/models/tables';
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
  }

  const modelExports = [];

  for (const [tableName, columns] of Object.entries(schema.tables)) {
    if (tableName === 'SequelizeMeta') continue;

    const className = toPascalCase(tableName);
    const fileName = `${className}.ts`;
    
    const neededEnums = new Set();
    const attributes = [];

    for (const col of columns) {
      const typeInfo = mapSqlTypeToSequelize(col.type, col.name);
      const tsType = mapSqlTypeToTS(col.type);
      
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

      const isOptional = !isNotNull || hasDefault || isPrimaryKey || isAutoIncrement;

      attributes.push({
        name: col.name,
        options: attributeOptions.join(', '),
        tsType: tsType,
        isOptional: isOptional
      });
    }

    const enumImports = Array.from(neededEnums).length > 0
      ? `import { ${Array.from(neededEnums).map(e => `${e}Enum`).join(', ')} } from '../enums';\n`
      : '';

    const hasTimestamps = columns.some(c => 
      c.name === 'createdAt' || c.name === 'created_at' || 
      c.name === 'updatedAt' || c.name === 'updated_at'
    );

    const modelContent = `import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
${enumImports}
export interface ${className}Attributes {
${attributes.map(a => `  ${a.name}${a.isOptional ? '?' : ''}: ${a.tsType};`).join('\n')}
}

export type ${className}CreationAttributes = Optional<${className}Attributes, 'id'${attributes.filter(a => a.isOptional && a.name !== 'id').map(a => ` | '${a.name}'`).join('')}>;

export class ${className} extends Model<${className}Attributes, ${className}CreationAttributes> implements ${className}Attributes {
${attributes.map(a => `  declare ${a.name}${a.isOptional ? '?' : ''}: ${a.tsType};`).join('\n')}
${hasTimestamps ? `
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;
` : ''}
  public static initModel(sequelize: Sequelize): typeof ${className} {
    ${className}.init(
      {
${attributes.map(a => `        ${a.name}: { ${a.options} }`).join(',\n')}
      },
      {
        sequelize,
        tableName: '${tableName}',
        timestamps: ${hasTimestamps},
        underscored: ${tableName.includes('_')},
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

// Generate init-models file with associations
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

    // hasMany relation (reverse)
    const reverseAsName = toCamelCase(fk.table);
    const pluralReverse = reverseAsName.endsWith('s') ? reverseAsName : reverseAsName + 's';
    associations.push(`  ${targetClass}.hasMany(${sourceClass}, { foreignKey: '${fk.column}', as: '${pluralReverse}' });`);
    associations.push('');
  }

  return associations.join('\n');
}

// Main execution
console.log('Starting improved model generation...');
console.log('');

const modelExports = generateModels();
console.log('');

generateInitModels(modelExports);
console.log('');

console.log('✅ All models generated successfully with proper TypeScript types!');
console.log(`📁 Models: src/models/tables/`);
console.log(`📄 Init: src/models/init-models.ts`);
