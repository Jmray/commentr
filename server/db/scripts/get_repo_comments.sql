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
    cast(c.reply_id as text) like case 
                    when $2 != -1 
                        THEN cast($2 as text)
                    ELSE '%'
                    END                   

GROUP BY 
    c.comment,
    c.priority, 
    c.time_stamp, 
    c.id, 
    c.reply_id, 
    c.user_id, 
    u.username, 
    u.image_url;