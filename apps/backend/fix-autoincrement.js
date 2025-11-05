const fs = require('fs');
const glob = require('glob');

// Find all TypeScript files in models directory
const files = glob.sync('src/models/*.ts');

let totalFixed = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Pattern to find autoIncrement without primaryKey
    // Look for blocks like:
    //   autoIncrement: true,
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // And add primaryKey: true after allowNull: false
    
    const pattern = /(autoIncrement:\s*true,\s*\n\s*type:\s*DataTypes\.(INTEGER|BIGINT),\s*\n\s*allowNull:\s*false)(\s*\n)/g;
    
    const newContent = content.replace(pattern, (match, p1, p2, p3) => {
        // Check if primaryKey already exists in this block
        if (match.includes('primaryKey')) {
            return match;
        }
        totalFixed++;
        return `${p1},${p3}      primaryKey: true${p3}`;
    });
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log(`✅ Fixed: ${file}`);
    }
});

console.log(`\n✅ Total files fixed: ${totalFixed}`);
