const fs = require('fs');
const path = require('path');

// Generate current timestamp
const timestamp = new Date().toISOString().replace(/[-T:]/g, '').slice(0, 14);

const migrationName = process.argv[2];

const fileName = `${timestamp}-${migrationName}.js`;

const migrationsDir = path.join(__dirname, 'server', 'migrations');

fs.writeFileSync(path.join(migrationsDir, fileName), '');

console.log(`Migration file created: ${fileName}`);