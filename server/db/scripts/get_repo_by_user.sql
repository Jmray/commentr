SELECT DISTINCT  cr.id, cr.owner_id, cr.description, cr.description_image, cr.title from "Comment_repos" cr
    INNER JOIN "Comments" c
    ON c.comment_repo_id = cr.id
    WHERE c.user_id = $1;