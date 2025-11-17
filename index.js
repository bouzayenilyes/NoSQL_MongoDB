const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Define Routes
app.use('/api/todos', require('./routes/todos'));


app.get('/', (req, res) => {
  res.send('test lel backend yekhdem');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server yekhdem eela l ${PORT}`)
);