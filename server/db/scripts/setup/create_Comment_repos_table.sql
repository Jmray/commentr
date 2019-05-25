CREATE TABLE "Comment_repos" (
    id serial PRIMARY KEY,
    owner_id integer NOT NULL REFERENCES "Users"(id) on DELETE CASCADE,
    description TEXT,
    description_image TEXT,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);