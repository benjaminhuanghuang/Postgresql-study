# Models

```prisma
model User {
  id        Int        @id @default(autoincrement())
  createdAt DateTime   @default(now())
  updatedAt temporal.updatedAt()
  email     String?    @unique
  image     String?
  role      Role       @default(USER)
  bookmarks Bookmark[]
}

enum Role {
  USER
  ADMIN
}

model Link {
  id          Int        @id @default(autoincrement())
  createdAt   DateTime   @default(now())
  updatedAt   temporal.updatedAt()
  title       String
  description String
  url         String
  imageUrl    String
  category    String
  users       Bookmark[]
}

model Bookmark {
  userId Int
  linkId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)
  link   Link @relation(fields: [linkId], references: [id], onDelete: Cascade)

  @@id([userId, linkId])
}

```
