## Migrate

give migration a name

```
  npx prisma migrate dev --name init

  npx prisma migrate dev --name add-post
```

foler `migrations` would be created

每次执行 migrate， prisma 都会更新 prisma client，以便使用最新生成的数据类型

## Prisma studio

```
  npx prisma studio
```
