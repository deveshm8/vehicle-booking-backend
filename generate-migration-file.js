const fs = require('fs');
const path = require('path');

// Generate current timestamp
const timestamp = new Date().toISOString().replace(/[-T:]/g, '').slice(0, 14);

// Get migration name from command line arguments
console.log("///////////////", process)
const migrationName = process.argv[2];

// Generate file name with timestamp
const fileName = `${timestamp}-${migrationName}.js`;

// Path to migrations directory
const migrationsDir = path.join(__dirname, 'server', 'migrations');
//console.log(">>>>>>>>>>>>>>",__dirname)
// Create the migration file
fs.writeFileSync(path.join(migrationsDir, fileName), '');

console.log(`Migration file created: ${fileName}`);