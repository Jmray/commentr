
    SELECT DISTINCT  cr.id,  cr.description, cr.description_image, cr.title, cr.time_stamp  from "Comment_repos" cr
    left OUTER JOIN "Comments" c
    ON c.comment_repo_id = cr.id
    where c.user_id = $1
    or cr.owner_id = $1;