# Simple – But Powerful – SQL Statements

## Challenges of Postgres

- Writing efficient queries to retrieve information
- Designing the schema, or structure, of the database
- Understanding when to use advanced features
- Managing the database in a production environment

## Database Design

### Database Design Process

- What kind of thing are we storing?
- What properties does this thing have?
- What type of data does each of those properties contain?

![](./db-design.png)

```sql
CREATE TABLE cities (
    name VARCHAR(50),
    country VARCHAR(50),
    population INTEGER,
    area INTEGER
);
```
