# Chicken Run

A simple API with NestJS and PostgreSQL where chickens can run :chicken:

## Get started

#### Prerequisites

- `node` >= 16
- `docker` and `docker-compose` are required to use this project's default PostgreSQL setup. Alternatively, you can set your own database connection in [app.module.ts](https://github.com/josayko-courses/chicken-run/blob/39b4fcb17179868ef481f4c9a6700df483570986/src/app.module.ts#L10)

```typescript
// app.module.ts:10
TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'docker',
      password: 'docker',
      database: 'chicken_run',
      autoLoadEntities: true,
      synchronize: true,
    }),
```

#### Install dependencies

```bash
$ cd chicken-run/
$ npm install
```

#### Run database

```bash
$ npm run db:up
```

#### Start the app

```bash
$ npm run start
```

> The API is running on http://localhost:3000 by default

- or development mode:

```bash
$ npm run start:dev
```

## Documentation

// TODO

## Author

- Jonny Saykosy <josayko@pm.me>

## License & copyright

© Jonny Saykosy
