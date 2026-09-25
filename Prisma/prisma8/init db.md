# Init DB

```sh
# Prisma 8
prisma db init
```

prisma db init 把当前 contract 转成 DDL 并执行——建表、索引、外键、唯一约束，同时写入 marker 行记录 contract hash（供后续 db verify 做 drift 检测）。这是首次建库的命令；之后改 schema 用 db update(开发环境快速同步) 或 migration plan + db migrate(生产环境走迁移历史)。

```sh
# Prisma 7
prisma migrate dev --name init
```

The command does the following things:

- Generate a new SQL migration called init
- Apply the migration to the database
- Install Prisma Client if it's not yet installed
- Generate Prisma Client based off the current schema

`migrate dev` 是 Prisma 7 及更早版本的命令，这个项目跑的是 Prisma 8 (@prisma/orm-postgres)，命令体系整个换了，migrate dev 在新 CLI 里根本不存在

Prisma 8 没有一步等价命令，拆成几条路：
首次建库、无历史文件：`prisma db init`
开发环境快速改 schema、不留历史：`prisma db update`
要保留迁移历史（对应 migrate dev 的历史记录部分）：`prisma migration plan --name <slug>` 生成迁移计划 → prisma db migrate 应用
