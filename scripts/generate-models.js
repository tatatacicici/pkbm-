const fs = require('fs');
const path = require('path');

// Read SQL dump file
const sqlDump = fs.readFileSync('attached_assets/pkbm_dump_1762831306197.sql', 'utf-8');

// Extract all enums
function extractEnums(sql) {
  const enumRegex = /CREATE TYPE public\.(enum_\w+) AS ENUM \(([\s\S]*?)\);/g;
  const enums = {};
  let match;
  
  while ((match = enumRegex.exec(sql)) !== null) {
    const enumName = match[1];
    const values = match[2]
      .split(',')
      .map(v => v.trim().replace(/^'|'$/g, ''))
      .filter(v => v.length > 0);
    
    enums[enumName] = values;
  }
  
  return enums;
}

// Extract table structures
function extractTables(sql) {
  const tableRegex = /CREATE TABLE public\.(\w+) \(([\s\S]*?)\n\);/g;
  const tables = {};
  let match;
  
  while ((match = tableRegex.exec(sql)) !== null) {
    const tableName = match[1];
    const tableContent = match[2];
    
    // Parse columns
    const columns = [];
    const lines = tableContent.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('CONSTRAINT') || trimmed.startsWith('CHECK')) {
        continue;
      }
      
      // Extract column name and type
      const columnMatch = trimmed.match(/^(\w+)\s+([\w\(\), ]+?)(?:,|\s|$)/);
      if (columnMatch) {
        const columnName = columnMatch[1];
        const columnType = columnMatch[2];
        
        columns.push({
          name: columnName,
          type: columnType,
          line: trimmed
        });
      }
    }
    
    tables[tableName] = { columns, raw: tableContent };
  }
  
  return tables;
}

// Extract foreign keys
function extractForeignKeys(sql) {
  const fkRegex = /ALTER TABLE ONLY public\.(\w+)\s+ADD CONSTRAINT (\w+) FOREIGN KEY \(([^)]+)\) REFERENCES public\.(\w+)\(([^)]+)\)/g;
  const foreignKeys = [];
  let match;
  
  while ((match = fkRegex.exec(sql)) !== null) {
    foreignKeys.push({
      table: match[1],
      constraintName: match[2],
      column: match[3].trim(),
      referencedTable: match[4],
      referencedColumn: match[5].trim()
    });
  }
  
  return foreignKeys;
}

// Map SQL types to Sequelize types
function mapSqlTypeToSequelize(sqlType) {
  const type = sqlType.toLowerCase();
  
  if (type.includes('uuid')) return 'DataTypes.UUID';
  if (type.includes('character varying') || type.includes('varchar')) {
    const lengthMatch = type.match(/\((\d+)\)/);
    if (lengthMatch) {
      return `DataTypes.STRING(${lengthMatch[1]})`;
    }
    return 'DataTypes.STRING';
  }
  if (type === 'text') return 'DataTypes.TEXT';
  if (type.includes('timestamp')) return 'DataTypes.DATE';
  if (type === 'date') return 'DataTypes.DATEONLY';
  if (type === 'boolean') return 'DataTypes.BOOLEAN';
  if (type.includes('integer')) return 'DataTypes.INTEGER';
  if (type.includes('bigint')) return 'DataTypes.BIGINT';
  if (type.includes('smallint')) return 'DataTypes.SMALLINT';
  if (type.includes('numeric') || type.includes('decimal')) return 'DataTypes.DECIMAL';
  if (type.includes('real') || type.includes('double')) return 'DataTypes.DOUBLE';
  if (type.includes('json') && !type.includes('jsonb')) return 'DataTypes.JSON';
  if (type.includes('jsonb')) return 'DataTypes.JSONB';
  if (type.includes('enum_')) {
    const enumName = type.match(/enum_\w+/)?.[0];
    if (enumName) {
      const pascalCase = toPascalCase(enumName.replace('enum_', ''));
      return `DataTypes.ENUM(...Object.values(${pascalCase}Enum))`;
    }
  }
  
  return 'DataTypes.STRING';
}

// Convert to PascalCase
function toPascalCase(str) {
  return str.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
}

// Convert to camelCase
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

console.log('Extracting enums...');
const enums = extractEnums(sqlDump);
console.log(`Found ${Object.keys(enums).length} enums`);

console.log('Extracting tables...');
const tables = extractTables(sqlDump);
console.log(`Found ${Object.keys(tables).length} tables`);

console.log('Extracting foreign keys...');
const foreignKeys = extractForeignKeys(sqlDump);
console.log(`Found ${foreignKeys.length} foreign keys`);

// Save extracted data
fs.writeFileSync('scripts/extracted-schema.json', JSON.stringify({
  enums,
  tables: Object.keys(tables).reduce((acc, name) => {
    acc[name] = tables[name].columns;
    return acc;
  }, {}),
  foreignKeys
}, null, 2));

console.log('Schema extraction complete!');
console.log('Generated scripts/extracted-schema.json');
