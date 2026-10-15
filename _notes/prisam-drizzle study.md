# Prisma and Drizzle study

Prisma 官方教程
https://www.prisma.io/docs/guides

Drizzle 官方教程
https://orm.drizzle.team/docs/get-started

Prisma vs Drizzle 对比指南
https://www.prisma.io/docs/orm/v6/more/comparisons/prisma-and-drizzle

《SQL Antipatterns》：Bill Karwin 著。学习数据库设计、外键、关联表和常见建模错误。它不专门讲 Prisma 或 Drizzle，但能帮你理解 ORM 背后的数据库原理。

《Learning SQL》：Alan Beaulieu 著。适合补充 SELECT、JOIN、聚合、子查询等基础知识，对理解 Drizzle 特别有帮助。

## 功能

先理解 SQL 和关系型数据库，再学习 Prisma 的抽象方式，最后学习 Drizzle 如何更贴近 SQL。这样你不仅能写代码，还能理解 ORM 为什么这样设计。

第一阶段：表结构和关联
学会主键、外键、一对多、多对多，以及 Schema 定义。

第二阶段：查询
实现查询用户及其订单、筛选订单、JOIN 多张表、分页和排序。

第三阶段：写入和事务
实现创建订单、批量添加订单商品、事务回滚和更新库存。

第四阶段：迁移和类型安全
对比 Prisma Migrate 与 Drizzle Kit，理解如何修改表结构并保持 TypeScript 类型正确。

## Plan

第 1 周：Next.js + Prisma
跟着官方 Next.js 指南，学习 Server Components 中的数据库查询、数据写入、迁移和部署。
https://docs.prisma.io/docs/guides/frameworks/nextjs

第 2 周：Drizzle + Next.js
实现相同的用户、订单、订单商品模型，练习 relations、with、JOIN 和 Drizzle Kit 迁移。
https://orm.drizzle.team/docs/tutorials/drizzle-nextjs-neon

第 3 周：Node.js + TypeScript
把数据库访问代码放进独立的服务层，学习事务、参数校验、错误处理和环境变量管理。再根据需要接入 Express 或 Hono。
[Prisma ORM 文档](https://www.prisma.io/docs) · [Drizzle 文档](https://orm.drizzle.team/docs/overview)
