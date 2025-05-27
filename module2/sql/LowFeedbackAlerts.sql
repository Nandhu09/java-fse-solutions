SELECT
    u.user_id,
    u.full_name,
    u.email,
    e.event_id,
    e.title AS event_name,
    f.rating,
    f.comments,
    f.feedback_date
FROM
    Feedback f
JOIN
    Users u ON f.user_id = u.user_id
JOIN
    Events e ON f.event_id = e.event_id
WHERE
    f.rating < 3
ORDER BY
    f.feedback_date DESC;
