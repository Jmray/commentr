CREATE TABLE "Votes" (
    user_id INTEGER REFERENCES "Users" (id),
    comment_id INTEGER REFERENCES "Comments"(id),
    vote SMALLINT
);