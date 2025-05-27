SELECT
    e.event_id,
    e.title,
    e.start_date,
    e.end_date,
    e.status,
    COUNT(s.session_id) AS session_count
FROM
    Events e
LEFT JOIN
    Sessions s ON e.event_id = s.event_id
WHERE
    e.status = 'upcoming'
GROUP BY
    e.event_id, e.title, e.start_date, e.end_date, e.status
ORDER BY
    e.start_date ASC;
