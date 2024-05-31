
CREATE SCHEMA IF NOT EXISTS product_manager;

USE product_manager;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL
);

INSERT INTO products (name, price, stock) VALUES
    ('Laptop', 1200, 10),
    ('Smartphone', 800, 25),
    ('Tablet', 600, 15),
    ('Headphones', 150, 50),
    ('Smartwatch', 200, 30),
    ('Monitor', 300, 20),
    ('Keyboard', 100, 40),
    ('Mouse', 50, 60),
    ('Printer', 250, 10),
    ('External Hard Drive', 120, 35);
