# TimescaleDB Course – PostgreSQL for Time-Series Data

https://www.youtube.com/watch?v=gYTA8nQN030

[中配](https://www.bilibili.com/video/BV1yRhC6VEy8?t=1.4)

查询"每小时的请求数量和平均响应耗时,最近 12 小时,按时间倒序排列"

```sql
SELECT date_trunc('hour', time) AS hour,
       COUNT(*) AS requests,
       ROUND(AVG(duration_ms), 2) AS avg_ms
FROM requests
GROUP BY 1
ORDER BY 1 DESC
LIMIT 12;
```

```sql
SELECT bucket AS hour,
       requests,
       ROUND(avg_ms, 2) AS avg_ms
FROM requests_hourly
ORDER BY 1 DESC
LIMIT 12;
```
