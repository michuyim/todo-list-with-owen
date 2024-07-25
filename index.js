const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/dbConnect');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/taskRouter');

dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT;

// Database connection
connectDB();

// Middleware setup
app.use(express());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

// Routes
app.use('/api', routes);

// Start the server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', err => {
    console.log(err);
});