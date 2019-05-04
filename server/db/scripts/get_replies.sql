SELECT * from "Comments" 
    WHERE comment_repo_id = $1
        AND reply_id = $2;