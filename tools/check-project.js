const fs = require('fs');
const path = require('path');

function walk(dir) {
  const res = [];
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) res.push(...walk(fp));
    else if (f === 'project.json') res.push(fp);
  }
  return res;
}

const root = process.cwd();
const files = walk(root);
const nameMap = {};
const errors = [];

for (const file of files) {
  try {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    const name = json.name;
    const rootp = json.root;
    const src = json.sourceRoot;
    const ptype = json.projectType;
    if (!name) errors.push({file, err: 'MISSING name'});
    if (!rootp) errors.push({file, err: 'MISSING root'});
    if (!src) errors.push({file, err: 'MISSING sourceRoot'});
    if (!ptype) errors.push({file, err: 'MISSING projectType'});
    if (rootp && !fs.existsSync(path.join(root, rootp))) errors.push({file, err: `ROOT path missing -> ${rootp}`});
    if (src && !fs.existsSync(path.join(root, src))) errors.push({file, err: `SOURCE_ROOT missing -> ${src}`});
    if (name) {
      if (nameMap[name]) errors.push({file, err: `DUPLICATE name -> ${name} (also in ${nameMap[name]})`});
      else nameMap[name] = file;
    }
  } catch (e) {
    errors.push({file, err: 'INVALID JSON'});
  }
}

if (files.length === 0) console.log('No project.json found');
if (errors.length === 0) {
  console.log('No obvious project.json structural errors found.');
} else {
  console.log('Errors:');
  for (const e of errors) console.log(`${e.file} => ${e.err}`);
}
