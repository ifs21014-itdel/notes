const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});

// Function to create database and table
const createDatabaseAndTable = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
      return;
    }
    console.log('Connected to MySQL server');

    // Create database if not exists
    const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`;
    connection.query(createDatabaseQuery, (err, result) => {
      if (err) {
        console.error('Error creating database:', err.stack);
        return;
      }
      console.log(`Database ${process.env.DATABASE} created or already exists`);

      // Switch to the created database
      connection.changeUser({ database: process.env.DATABASE }, (err) => {
        if (err) {
          console.error('Error switching to database:', err.stack);
          return;
        }

        // Create notes table if it doesn't exist
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS notes (
            id BIGINT AUTO_INCREMENT PRIMARY KEY,
            title TEXT NOT NULL,
            datetime DATETIME NOT NULL,
            note LONGTEXT NOT NULL
          )
        `;
        
        connection.query(createTableQuery, (err, result) => {
          if (err) {
            console.error('Error creating table:', err.stack);
            return;
          }
          console.log('Table "notes" created or already exists');
          connection.end(); // Close connection after migration is done
        });
      });
    });
  });
};

// Run the migration
createDatabaseAndTable();
