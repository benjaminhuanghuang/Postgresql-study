# TimescaleDB Course – PostgreSQL for Time-Series Data

https://www.youtube.com/watch?v=gYTA8nQN030

[中配](https://www.bilibili.com/video/BV1yRhC6VEy8?t=1.4)

`INSERT INTO your_brain SELECT * FROM this_course;`

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

What is time-series data? Data you analyze by timestamp, such as requests, readings, or events.

These workloads often add records continuously and query a time range.

Examples of time-series data

- HTTP requests — API request records
- Market data — Price ticks from an exchange
- Sensors — Readings from connected devices
- Product analytics — User activity events
- Logs & metrics — Application logs and measurements
- Agent runs — Model and tool calls

```sh
# Install
CREATE EXTENSION IF NOT EXISTS timescaledb

SELECT extname, extversion FROM pg_extension
```

## SQL

```sql
SELECT MAX(time) from requests;
SELECT MAX(time) AS newest from requests \gset

# use the newest variable
SELECT COUNT(*) FROM requests WHERE time >= :'newest'::timestamptz - INTERVAL '24 hours';
```
