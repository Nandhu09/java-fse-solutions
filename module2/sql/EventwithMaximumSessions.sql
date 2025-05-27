WITH SessionCounts AS (
    SELECT
        event_id,
        COUNT(session_id) AS session_count
    FROM
        Sessions
    GROUP BY
        event_id
),
MaxCount AS (
    SELECT
        MAX(session_count) AS max_sessions
    FROM
        SessionCounts
)
SELECT
    e.event_id,
    e.title,
    sc.session_count
FROM
    SessionCounts sc
JOIN
    MaxCount mc ON sc.session_count = mc.max_sessions
JOIN
    Events e ON sc.event_id = e.event_id;
