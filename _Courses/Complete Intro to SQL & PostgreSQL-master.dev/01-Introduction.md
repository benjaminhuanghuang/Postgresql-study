# Introduction

## SQL Setup with Docker

Install Docker Desktop
https://www.docker.com/products/docker-desktop/

```sh
docker pull btholt/complete-intro-to-sql

docker run -e POSTGRES_PASSWORD=lol --name=pg --rm -d -p 5432:5432 btholt/complete-intro-to-sql

docker exec -u postgres -it pg psql
```

-e POSTGRES_PASSWORD=lol Set the PostgreSQL user's password to lol
--name=pg Give the container the name pg
--rm Automatically delete the container when it stops
-d Run in the background (detached mode)
-i interact
-t TTY
