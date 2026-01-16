# SQL Vibe Coding with GitHub Copilot

Install PostgreSQL VS code extension by Microsoft

## Create tables

Add prompt.txt, agent-instructions.md, createtable.sql to context @
chat: analyze the prompt.txt file and generate the sql queries and put that sql query in createtables.sql file

Or past the prompt to chat  
chat: generate the sql query and put that sql query in createtables.sql file

In PostgreSQL VS code extension, connect database in Agent Mode, add createtable.sql to context @
chat: execute the createtable.sql file

## Add data

chat: your job is to add records into those tables. Create a new sql file called addrecords.sql and put all the queries into that file. The data is in CSV format and it located inside the Datasetb directory.

chat: Here is the example of the prompt:
COPY geolocation(geolocation_zip_code_prefix, geolocation_lat, geolocation_lng, geolocation_city, geolocation_state)
FROM './Dataset/Geolocation.csv'
DELIMITER ','
CSV HEADER
QUOTE '"'
ESCAPE '"';
The table name is exactly the same as the csv file name which you can find inside the Database directory at root level

## Visualize the schema

chat: visualize the schema

## Data anylaize

chat: Find the total sales amount for each product category
