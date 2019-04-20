CREATE TABLE "Comments" (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    priority INTEGER NOT NULL,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reply_id integer NOT NULL,
    user_id integer NOT NULL REFERENCES "Users" (id),
    comment_repo_id INTEGER NOT NULL REFERENCES "Comment_repos" (id)

);