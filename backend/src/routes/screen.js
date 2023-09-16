const express = require('express');
const { GetDbConnection } = require('../utils.js');
const router = express.Router();

const pool = GetDbConnection()

router.get('/', (req, res)=>{
    res.set('Content-Type', 'application/json');
    pool.query('SELECT * FROM screens ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }

        res.status(200).send(results.rows[0]);
    });
});

router.post('/', (req, res)=>{
    res.set('Content-Type', 'application/json');
    pool.query('INSERT INTO screens (id, data) VALUES($1, $2) ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data;', [1, req.body.data || ""], (error, results) => {
        if (error) {
          throw error
        }
    });
    res.status(200).send(req.body);
})

module.exports = router
