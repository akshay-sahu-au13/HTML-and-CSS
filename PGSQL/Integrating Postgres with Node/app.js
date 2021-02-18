const require = require('express');
const app = express();

const PORT = 9898;

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    port:5432
});

app.get('/users', (req, res)=> {
    pool.query('SELECT * FROM customers ORDER BY first_name ASC', (err, result)=> {
        if (err) throw err;
        res.json(result);
    })
})


app.get('/users/:id', (req, res)=> {
    pool.query(`SELECT * FROM customers WHERE id = ${id}`, (err, result)=> {
        if (err) throw err;
        res.json(result.rows);
    })
});

app.post('/addUser', (req, res)=>{
    const {first_name, last_name, gender, phone_number} = req.body;
    pool.query('INSERT INTO customers VALUES ($1, $2, $3, $4)', [first_name, last_name, gender, phone_number], (err, result)=> {
        if (err) throw err;
        res.send(result);
    })
});

app,listen(PORT);