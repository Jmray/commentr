CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    email TEXT,
    password TEXT,
    image_url text
);