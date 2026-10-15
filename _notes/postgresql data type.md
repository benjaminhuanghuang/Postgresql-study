# PostgreSQL data type

## Most common 10 datatype

- INTEGER：普通整数、数量
- BIGINT：较大整数 ID、计数值
- NUMERIC(12,2)：金额、精确小数
- TEXT：姓名、标题、普通字符串
- BOOLEAN：开关、是否启用
- UUID：唯一标识符
- DATE：生日、纯日期
- TIMESTAMPTZ：创建时间、支付时间
- JSONB：灵活的结构化数据
- TEXT[]：简单字符串列表

## Numeric Types

| 类型             | 用途                     | 示例         |
| ---------------- | ------------------------ | ------------ |
| SMALLINT         | 小范围整数               | 18           |
| INTEGER / INT    | 普通整数                 | 100          |
| BIGINT           | 大范围整数               | 9000000000   |
| SMALLSERIAL      | 自动递增的小整数         | ID           |
| SERIAL           | 自动递增整数             | ID           |
| BIGSERIAL        | 自动递增的大整数         | 大型表 ID    |
| NUMERIC(p,s)     | 精确小数                 | 99.99        |
| DECIMAL(p,s)     | 精确小数，等同于 NUMERIC | 1234.56      |
| REAL             | 单精度浮点数             | 3.14         |
| DOUBLE PRECISION | 双精度浮点数             | 3.1415926535 |

- 用户数量、商品数量、订单数量：通常使用 INTEGER。
- 金额、价格：优先使用 NUMERIC(12,2)，避免浮点精度误差。
- 科学计算、近似值：使用 REAL 或 DOUBLE PRECISION。
- 自增主键：可以使用 GENERATED ... AS IDENTITY，这是比传统 SERIAL 更现代的写法。

```sql
CREATE TABLE products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0
);
```

## Character Types

| 类型       | 用途                 | 示例                                    |
| ---------- | -------------------- | --------------------------------------- |
| TEXT       | 普通文本             | 长度可变，常用                          |
| VARCHAR(n) | 限定最大长度的字符串 | 如 VARCHAR(100)                         |
| CHAR(n)    | 固定长度字符串       | 不常用                                  |
| UUID       | 通用唯一标识符       | 如 550e8400-e29b-41d4-a716-446655440000 |

在 PostgreSQL 中，TEXT 和 VARCHAR 的性能通常没有明显差异。除非确实需要限制长度，否则很多场景直接使用 TEXT 就可以。

## Date/Time Types

| 类型        | 用途                     | 示例                   |
| ----------- | ------------------------ | ---------------------- |
| DATE        | 日期                     | 2026-10-15             |
| TIME        | 一天中的时间             | 14:30:00               |
| TIMESTAMP   | 日期和时间，不含时区语义 | 2026-10-15 14:30:00    |
| TIMESTAMPTZ | 带时区语义的时间点       | 2026-10-15 14:30:00+00 |
| INTERVAL    | 时间间隔                 | 2 days                 |

- 记录用户创建时间、订单支付时间、登录时间，通常选 TIMESTAMPTZ。TIMESTAMPTZ 内部按时间点存储，查询显示时会根据当前会话的时区转换，并不保留原始时区名称。
- 生日、预约日期等只有日期的字段，选 DATE。

## Boolean

| 类型           | 用途        |
| -------------- | ----------- |
| BOOLEAN / BOOL | TRUE、FALSE |

```sql
is_active BOOLEAN NOT NULL DEFAULT TRUE
```

## JSON

| 类型  | 用途           | 特点                                 |
| ----- | -------------- | ------------------------------------ |
| JSON  | 存储 JSON 文档 | 保留输入文本的格式特征               |
| JSONB | 存储 JSON 文档 | 以二进制形式处理，支持高效索引和查询 |

在 PostgreSQL 中查询 JSON 的字段，通常优先考虑 JSONB。如果数据结构固定，且需要强约束、关联和筛选，通常更适合使用普通列。

## Array

```sql
CREATE TABLE articles (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}'
);
```

## ENUM

```sql
CREATE TYPE order_status AS ENUM (
  'pending',
  'paid',
  'shipped',
  'cancelled'
);

CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  status order_status NOT NULL DEFAULT 'pending'
);
```

## Other

| 类型               | 用途                                      |
| ------------------ | ----------------------------------------- |
| BYTEA              | 二进制数据                                |
| INET               | IPv4 / IPv6 地址                          |
| CIDR               | IP 网络地址段                             |
| MACADDR            | MAC 地址                                  |
| BIT / BIT VARYING  | 位字符串                                  |
| XML                | XML 文档                                  |
| POINT、GEOMETRY 等 | 几何数据；复杂地理信息常使用 PostGIS 扩展 |
| TSVECTOR           | 全文搜索                                  |
| TSQUERY            | 全文搜索查询表达式                        |
| RANGE 类型         | 表示一个范围，例如日期或数字区间          |
