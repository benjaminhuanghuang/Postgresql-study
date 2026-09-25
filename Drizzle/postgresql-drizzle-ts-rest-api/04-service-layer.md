# Service Layer

If the API is small and simple, e.g., just basic CRUD for a single model, you can put the logic directly in the controller.

Example:

```ts
// userController.ts (no service layer)
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
```

## When You Do Need a Service Layer

- Complex business logic: When creating/updating a resource requires multiple steps.

```js
// userController.ts
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUserWithProfile(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
```

- Reusability: multiple controllers need the same logic, the service layer avoids code duplication
- Testing: A service layer makes unit testing easier. You can test business logic without hitting the database or HTTP layer.
- Separation of concerns:
  - Controller → Handles HTTP requests and responses
  - Service → Handles business logic
  - Model → Handles data persistence

## For test

### without service layer

```js
const fromMock = vi.fn();
const valuesMock = vi.fn();
const returningMock = vi.fn();

vi.mock("../src/db", () => ({
  db: {
    select: vi.fn(() => ({ from: fromMock })),
    insert: vi.fn(() => ({ values: valuesMock })),
  },
}));

describe("user api", () => {
  beforeEach(() => {
    fromMock.mockReset();
    valuesMock.mockReset();
    returningMock.mockReset();
  });
});
```

## with service layer

```js
import * as userService from "../src/services/user.service";

vi.mock("../src/services/user.service");
```
