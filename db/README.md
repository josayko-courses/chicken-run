# Database

## Prerequisites

- docker
- docker-compose

## Start postgres database containers

#### Run in background

```
$ docker-compose up -d
```

#### Connect to the database via CLI

```
$ docker exec -it chicken-db psql -U admin
```

#### Connect to the database via pgadmin4 dashboard

1. Login to pgadmin4 dashboard at `127.0.0.1:8080`. By default, email is `admin@admin.org` and password is `S3cret`
2. `Add new server`, enter a name in General tab
3. In connection tab, default hostname is `postgres`. Leave default port to `5432` and maintenance database to postgres. Connection `username/password` is either `admin/S3cret` or `docker/docker`
