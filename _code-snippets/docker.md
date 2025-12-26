# Docker

```sh
docker run --name my-pg -e POSTGRES_PASSWORD=admin1234 -p 5432:5432 -d postgres:15.2
```

- docker run - Creates and starts a new container
- --name my-pg - Names the container "my-pg" (makes it easier to reference later instead of using a random ID)
- -e POSTGRES_PASSWORD=admin1234 - Sets an environment variable inside the container.
- -p 5432:5432 - Maps ports between your host machine and the container
- -d - Runs the container in "detached" mode (in the background), so you get your terminal back instead of seeing the container's logs
- postgres:15.2 - The Docker image to use
