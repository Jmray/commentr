CREATE TABLE "Comment_repos" (
    id serial PRIMARY KEY,
    owner_id integer REFERENCES "Users"(id),
    description TEXT,
    description_image TEXT
)