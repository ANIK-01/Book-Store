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

// Define routes
app.get('/', (req, res) => {
    res.send('Backend is running with PostgreSQL!');
});

app.get('/api/check', (req, res) => {
    res.json({ message: 'Frontend connected with PostgreSQL backend!' });
});


// Start the server
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});