# Temporal

```ts
import "temporal-polyfill/full/global";
```

Temporal 是 TC39 提案的新版 JS 日期时间 API（Temporal.Instant、PlainDate 等），比 Date 精度高、无时区坑，但要等到 Node 26.8.2+ 才内置为 globalThis.Temporal。Node v25.9.0，没有这个全局对象。

Prisma 8 里 Timestamptz/DateTime 类型的列（比如 createdAt、updatedAt）在运行时读写的是 Temporal.Instant，不是 Date。
如果全局没有 Temporal，一读写这类列就抛 RUNTIME.TEMPORAL_UNAVAILABLE

temporal-polyfill 是一个纯 JS 实现的 Temporal polyfill 包。temporal-polyfill/full/global 这个子路径的作用就是把它注入到 globalThis.Temporal，让运行时的行为跟原生支持一样。必须在第一次查询数据库之前 import，所以放在 db.ts 顶部、postgres() 客户端创建之前。

等以后升级到 Node 26.8.2+，这行就可以删掉了（前提是届时代码里没有依赖 polyfill 特有行为）。
