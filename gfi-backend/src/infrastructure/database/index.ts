import { Pool, Client } from "pg"
const pool = new Pool({
    host: 'localhost',
    user: 'db-user',
    password: '1234',
    max: 20,
});

const result = await pool.query('SELECT $1::text as name', ['biranc']);
console.log(result.rows[0].name);



