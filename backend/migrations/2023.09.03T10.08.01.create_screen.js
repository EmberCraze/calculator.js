const { GetDbConnection } = require('../src/utils.js')

/** @type {import('umzug').MigrationFn<any>} */
exports.up = async params => {
  pool = GetDbConnection()
  pool.query('CREATE TABLE IF NOT EXISTS screens(id SERIAL PRIMARY KEY, data VARCHAR(255) NOT NULL);', (error, results) => {
        if (error) {
          throw error
        }
    })
};

/** @type {import('umzug').MigrationFn<any>} */
exports.down = async params => {
  pool = GetDbConnection()
  pool.query('DROP TABLE IF EXISTS screens;', (error, results) => {
        if (error) {
          throw error
        }
    })
};
