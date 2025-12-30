const SequelizeAuto = require('sequelize-auto');
require('dotenv').config();

const auto = new SequelizeAuto(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    directory: './src/models',
    lang: 'ts',
    caseModel: 'p',
    caseFile: 'p',
    caseProp: 'c',
    singularize: false,
    useDefine: false,
    typescript: true,
    additional: {
      timestamps: false,
    },
  }
);

auto.run().then((data) => {
  console.log('✅ Models generated successfully!');
  console.log(`Generated ${Object.keys(data.tables).length} models`);
}).catch((err) => {
  console.error('❌ Error generating models:', err);
  process.exit(1);
});
