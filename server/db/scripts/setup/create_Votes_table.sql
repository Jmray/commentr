CREATE TABLE "Votes" (
    user_id INTEGER NOT NULL REFERENCES "Users" (id),
    comment_id INTEGER NOT NULL REFERENCES "Comments"(id) ON DELETE CASCADE,
    vote SMALLINT NOT NULL
);