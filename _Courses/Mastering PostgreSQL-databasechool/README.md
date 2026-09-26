# Mastering PostgreSQL

by Araon Francis

https://databaseschool.com/series/mastering-postgres/videos/88

[中配](https://www.bilibili.com/video/BV1RrGX6MEKF?t=1.1)

## Table of content

### Module 1: Introduction

- Introduction to the course (2:14)
- Overview of course structure (3:40)
- Postgres vs. everyone (2:08)
- The psql CLI (2:38)

### Module 2: Data Types

- Introduction to schema (6:45)
- Integers (9:40)
- Numeric (9:50)
- Floating point (8:04)
- Storing money (8:16)
- NaNs and infinity (3:44)
- Casting types (5:35)
- Characters types (7:42)
- Check constraints (8:55)
- Domain types (7:49)
- Charsets and collations (7:48)
- Binary data (9:00)
- UUIDs (6:19)
- Boolean (3:47)
- Enums (12:45)
- Timestamps (12:43)
- Timezones (13:13)
- Dates and times (7:50)

### Module 3: Advanced Data Types

- Intervals (5:47)
- Serial type (9:52)
- Sequences (4:49)
- Identity (7:02)
- Network and mac addresses (4:48)
- JSON (10:17)
- Arrays (7:05)
- Generated columns (8:03)
- Text search types (7:42)
- Bit string (5:15)
- Ranges (15:39)
- Composite types (4:19)
- Nulls (3:52)
- Unique constraints (5:38)
- Exclusion constraints (6:52)
- Foreign key constraints (10:50)

### Module 4: Indexing

- Introduction to indexes (5:27)
- Heaps and CTIDs (4:18)
- B-Tree overview (5:02)
- Primary keys vs. secondary indexes (3:00)
- Primary key types (7:13)
- Where to add indexes (8:44)
- Index selectivity (9:15)
- Composite indexes (8:44)
- Composite range (3:08)
- Combining multiple indexes (4:34)
- Covering indexes (8:54)
- Partial indexes (6:29)
- Index ordering (4:00)
- Ordering nulls in indexes (2:35)

### Module 5: Advanced Indexing

- Functional indexes (5:22)
- Duplicate indexes (3:04)
- Hash indexes (4:13)
- Naming indexes (2:16)

### Module 6: Understanding Query Plans

- Introduction to explain (1:25)
- Explain structure (5:17)
- Scan nodes (11:28)
- Costs and rows (8:23)
- Explain analyze (2:38)

### Module 7: Generating Results

- Introduction to queries (1:25)
- Cross joins (5:21)
- Inner joins (6:19)
- Outer joins (5:40)
- Subqueries (6:38)
- Lateral joins (6:22)
- ROWS FROM (6:21)
- Filling gaps in sequences (6:56)
- Subquery elimination (14:21)
- Combining queries (7:58)
- Set generating functions (3:44)
- Indexing joins (4:47)

### Module 8: Advanced SQL

- Introduction to advanced SQL (1:26)
- Grouping (11:07)
- Grouping sets, rollups, cubes (7:14)
- Window functions (18:10)
- CTEs (10:31)
- CTEs with window functions (10:35)
- Recursive CTE (6:44)
- Hierarchical recursive CTE (6:20)
- Handling nulls (6:51)
- Row value syntax (11:44)
- Views (7:44)
- Materialized views (10:52)
- Removing duplicate rows (5:00)
- Upsert (8:38)
- Returning keyword (4:00)
- COALESCE + generated column (4:31)

### Module 9: Full Text Search

- Introduction to full text search (3:01)
- Searching with LIKE (3:03)
- Vectors, queries, and ranks (8:09)
- Websearch (5:56)
- Ranking (14:10)
- Indexing full text search (6:08)
- Highlighting (3:32)

### Module 10: Advanced JSON

- Intro to JSON (3:16)
- JSON vs JSONB (4:17)
- Validating JSON (4:41)
- Creating JSON objects + arrays (8:20)
- JSON extraction (8:25)
- JSON containment (4:15)
- JSON existence (3:03)
- JSON recordset (8:41)
- Updating JSON (11:53)
- Indexing JSON parts (10:08)
- GIN index (6:14)

### Module 11: Vectors (pgvector)

- Intro to pgvector (2:17)
- Vector embedding columns (7:59)
- Find related articles (9:21)
- Upsert vector embedding (3:02)
- Semantic search (5:36)
- Other operators (3:06)
- Vector indexes (4:59)

### Module 12: Outro

- Thank you (1:41)
