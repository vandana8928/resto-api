const mongoose = require('mongoose');
// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/database';

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection events

// When successfully connected
db.on('connected', () => {
    console.log('Database is connected');
});

// If connection throws an error
db.on('error', (err) => {
    console.error('Database connection error:', err.message);
});

// When the connection is disconnected
db.on('disconnected', () => {
    console.log('Database is disconnected');
});

// Export the database connection
module.exports = db;
