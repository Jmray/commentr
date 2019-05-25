SELECT DISTINCT  cr.id,  cr.description, cr.description_image, cr.title, cr.time_stamp, u.id as user_id,  u.image_url  from "Comment_repos" cr
    INNER JOIN "Comments" c
    ON c.comment_repo_id = cr.id
    INNER JOIN "Users" u 
    ON cr.owner_id = u.id
    WHERE cr.id = $1;