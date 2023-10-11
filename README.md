
# Server template with BUN - Graphql and Rest API

## Information
- node: >16
- bun: 1.0.4
- prisma
- graphql-yoga
- @graphql-yoga/plugin-sofa

## Clone source code: 
```bash
git clone https://github.com/devhoangkien/bun-server-template.git
```

## To install dependencies:

```bash
bun install
```

## To run:

```bash
# docker run
docker compose up
# install package
bun install

# migration
bun db:init # init database, migration and seed data
bun db:clean # clean data of database
bun seed # run seed data

# start app
bun dev

# build
bun build

# start build
bun start

```

This project was created using `bun init` in bun v1.0.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
