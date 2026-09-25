## Query

```
  const result = await prisma.user.findMany();

  # 返回部分字段
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true
    }
  });


  const result = await prisma.user.findMany({
    where : {
      name: {
        startsWith: 'v'
      }
    }
  });

  # Pagination
  const result = await prisma.user.findMany({
    skip: 2,
    take: 2
  });
```

```
const result = await prisma.user.findUnique({
  where: {email: 'bbb@gmail.com'},
  include: {posts: true}
});
```

## Create

```
const result = await prisma.user.create({
    data:{
      name: 'bbb'
      email:'bbb@gmail.com'
    }
  });
```

关联创建

```
const result = await prisma.user.create({
    data:{
      name: 'bbb'
      email:'bbb@gmail.com'，
      posts: {
        create: {
          title: 'Second',
          content: '2'
        }
      }
    }
  });
```

## Upate

```
  const result = await prisma.user.update({
    where:{
      email:'bbb@gmail.com'
    },
    data:{
      name:'bbb'
    }
  });
```

connect

```
  const result = await prisma.post.update({
    where:{
      id:1
    },
    data:{
      author:{
        connect:{email:"bbb@gmail.com"}
      }
    }
  })
```
