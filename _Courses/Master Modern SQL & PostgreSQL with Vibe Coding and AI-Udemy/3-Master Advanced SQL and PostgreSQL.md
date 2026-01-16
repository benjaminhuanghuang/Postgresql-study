# Master Advanced SQL and PostgreSQL

## ACID

1. Atomicity

A transaction is all or nothing.

Either all operations succeed, or none are applied.

If any part fails, the entire transaction is rolled back.

📌 Example: Transferring money: debit and credit both must happen, or neither does.

2. Consistency

A transaction brings the database from one valid state to another.

All constraints, rules, and relationships are preserved.

📌 Example: An account balance cannot become negative if rules disallow it.

3. Isolation

Concurrent transactions do not interfere with each other.

Each transaction behaves as if it is the only one running.

📌 Prevents: Dirty reads, non-repeatable reads, phantom reads.

4. Durability

Once a transaction is committed, it is permanently saved.

Data survives system crashes or power failures.

📌 Achieved through: Logs, backups, and stable storage.
