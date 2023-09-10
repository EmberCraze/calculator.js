const { Umzug, jsonStorage } = require('umzug');
const path = require('path');

const umzug = new Umzug({
  storage: jsonStorage,
  storageOptions: {
      path: path.join(__dirname, 'umzug.json'),
  },
  migrations: {
    glob: 'migrations/*.js',
    path: './migrations',
    pattern: /\.js$/,
  }
});


exports.umzug = umzug

if (require.main === module) {
  umzug.runAsCLI()
}
