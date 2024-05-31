
CREATE SCHEMA IF NOT EXISTS product_manager;

USE product_manager;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL
);

INSERT INTO products (name, description, price, stock) VALUES
    ('Laptop', 'A high performance laptop suitable for all your computing needs.', 1200, 10),
    ('Smartphone', 'A latest generation smartphone with all the modern features.', 800, 25),
    ('Tablet', 'A lightweight and portable tablet perfect for reading and browsing.', 600, 15),
    ('Headphones', 'Noise-cancelling headphones with high-quality sound.', 150, 50),
    ('Smartwatch', 'A smartwatch with various health tracking features.', 200, 30),
    ('Monitor', 'A 24-inch full HD monitor for clear and vibrant display.', 300, 20),
    ('Keyboard', 'A mechanical keyboard with customizable RGB lighting.', 100, 40),
    ('Mouse', 'A wireless mouse with ergonomic design.', 50, 60),
    ('Printer', 'A fast and efficient printer for home and office use.', 250, 10),
    ('External Hard Drive', 'A 1TB external hard drive for extra storage.', 120, 35);
