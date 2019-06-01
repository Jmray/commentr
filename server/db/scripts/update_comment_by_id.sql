UPDATE "Comments"
    SET comment = $1
        where id = $2
    RETURNING comment, id;