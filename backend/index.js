const express = require('express');
const { Pool } = require('pg'); // Import PostgreSQL library
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a pool of connections for PostgreSQL
const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
});

// Test the connection
db.connect()
    .then(() => console.log('Connected to the PostgreSQL database.'))
    .catch((err) => console.error('Database connection failed:', err.stack));



app.get('/', (req, res) => {
    res.json({ message: 'Connected with PostgreSQL backend!' });
});
// Define routes
app.get('/books', (req, res) => {
    console.log('Received request on /books');
    db.query(`SELECT * FROM book`, (err, data) => {
        if (!err) {
            console.log(data.rowCount);
            return res.json(data);
        } else {
            console.error('Database query error:', err.message);
            return res.status(500).json({ error: err.message });
        }
    });
});





// Start the server
const PORT = process.env.PORT || 5444;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});