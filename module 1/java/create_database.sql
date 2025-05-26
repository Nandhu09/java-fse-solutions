-- Create database
CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, age) VALUES
('Alice', 'alice@example.com', 22),
('Bob', 'bob@example.com', 23),
('Charlie', 'charlie@example.com', 21);
