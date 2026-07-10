# React State Updates: Why `setCounter(counter + 1)` Only Increases Once

One of the most common React interview questions involves updating state multiple times in a single event.

## The Scenario

Imagine you have a React counter that starts at **15**.

An interviewer may write code like this inside a button click handler:

```jsx
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
```

Then they'll ask:

> **"After clicking the button, what will the counter value be?"**

Many people expect the counter to increase by **4**, resulting in **19**.

**Actual result:** **16**

---

## Why Does This Happen?

React batches state updates to improve performance.

During the same event, every call above uses the **same value** of `counter`.

If `counter` is `15`, React effectively sees:

```jsx
setCounter(16);
setCounter(16);
setCounter(16);
setCounter(16);
```

Since every update sets the state to the same value, React only applies the final result:

```text
15 → 16
```

---

## How to Update State Multiple Times Correctly

When the next state depends on the previous state, use the **functional updater**.

```jsx
setCounter(prevCounter => prevCounter + 1);
```

Now React processes each update using the latest state.

Example:

```jsx
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
```

Execution becomes:

```text
15 → 16
16 → 17
17 → 18
18 → 19
```

Final value:

```text
19
```

---

## Why the Functional Updater Works

The parameter (`prevCounter`) represents the **most recent state value**.

For each update:

1. React takes the latest state.
2. Passes it to `prevCounter`.
3. Adds `1`.
4. Uses the updated value for the next function call.

This guarantees that every update is based on the newest state instead of the original one.

---

## Best Practice

Whenever your next state depends on the previous state, always use the functional updater.

❌ Avoid:

```jsx
setCounter(counter + 1);
```

✅ Prefer:

```jsx
setCounter(prevCounter => prevCounter + 1);
```

Using a descriptive name like `prevCounter` makes your code easier to read and clearly communicates that you're working with the previous state.

---

## Interview Takeaway

**Question:**

```jsx
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
```

Starting value:

```text
15
```

Result:

```text
16 ✅
```

---

**Correct approach:**

```jsx
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
```

Starting value:

```text
15
```

Result:

```text
19 ✅
```

---

## Key Takeaways

- React batches state updates for better performance.
- Multiple `setCounter(counter + 1)` calls in the same event use the same state value.
- Use the functional updater whenever the next state depends on the previous state.
- The functional updater ensures each update receives the latest state, making consecutive updates work as expected.
- This is one of the most frequently asked React interview questions.