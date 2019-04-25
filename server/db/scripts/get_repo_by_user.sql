SELECT * FROM "Comment_repos"
WHERE (SELECT comment_repo_id from "Comments")