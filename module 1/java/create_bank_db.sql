-- Create database
CREATE DATABASE IF NOT EXISTS bank_db;
USE bank_db;

-- Create accounts table
CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample accounts
INSERT INTO accounts (name, balance) VALUES
('John Smith', 1000.00),
('Jane Doe', 500.00),
('Bob Johnson', 2000.00);
