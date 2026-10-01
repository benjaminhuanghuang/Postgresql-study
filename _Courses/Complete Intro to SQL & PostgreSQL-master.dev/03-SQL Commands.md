# SQL Commands

## Inserting Data and Managing Conflicts

## Updating & Deleting Data

## Selecting, Paginating, & Using Where Clauses

```sql
SELECT * FROM ingredients WHERE CONCAT(title, type) LIKE '%fruit%';
```

## Using LIKE, ILIKE, & SQL Functions

ILIKE with case insensitivity.

```sql
SELECT * FROM ingredients WHERE CONCAT(title, type) LIKE '%fruit%';

SELECT * FROM ingredients WHERE title ILIKE 'c%';
```

## node-postgres & SQL Injection

```sql
SELECT * FROM ingredients WHERE id = <user input here>;

SELECT * FROM ingredients WHERE id=1; DROP TABLE users; --
```

## Ingredients API Exercise

## Ingredients API Solution
