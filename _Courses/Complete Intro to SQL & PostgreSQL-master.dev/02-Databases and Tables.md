# Databases and Tables

## SQL Overview & Creating a Database

```sql
CREATE TABLE ingredients (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO ingredients (title) VALUES ('bell pepper');

SELECT * FROM ingredients;

DROP TABLE ingredients;
```

## Creating & Populating a Table

## Altering a Table & Postgres Data Types

```sql
CREATE TABLE ingredients (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) UNIQUE NOT NULL
);

ALTER TABLE ingredients ADD COLUMN image VARCHAR ( 255 );

ALTER TABLE ingredients DROP COLUMN image;


ALTER TABLE ingredients
ADD COLUMN image VARCHAR ( 255 ),
ADD COLUMN type VARCHAR ( 50 ) NOT NULL DEFAULT 'vegetable';

```
