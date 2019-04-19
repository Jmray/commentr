CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    username VARCHAR(30),
    email TEXT,
    password TEXT
);