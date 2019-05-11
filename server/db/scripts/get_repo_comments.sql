SELECT 
    c.comment,
    c.priority, 
    c.time_stamp, 
    c.id, 
    c.reply_id, 
    c.user_id, 
    u.username, 
    u.image_url,
    sum(v.vote) as votes
FROM 
    "Comments" c
    INNER JOIN "Users" u on c.user_id = u.id
    LEFT OUTER JOIN "Votes" AS v ON (c.id = v.comment_id)
    

WHERE
    c.comment_repo_id = $1
and 
    c.reply_id =$2                 

GROUP BY 
    c.comment,
    c.priority, 
    c.time_stamp, 
    c.id, 
    c.reply_id, 
    c.user_id, 
    u.username, 
    u.image_url;