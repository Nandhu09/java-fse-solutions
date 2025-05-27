SELECT
    u.user_id,
    u.full_name,
    u.email,
    COUNT(f.feedback_id) AS feedback_count
FROM
    Users u
JOIN
    Feedback f ON u.user_id = f.user_id
GROUP BY
    u.user_id, u.full_name, u.email
ORDER BY
    feedback_count DESC
LIMIT 5;

