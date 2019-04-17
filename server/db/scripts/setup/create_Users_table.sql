CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password TEXT,
    email TEXT,
    name TEXT
);