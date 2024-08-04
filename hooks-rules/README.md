# React Hooks Rules

React hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class. Here are the key rules to follow when using React hooks:

## Basic Rules of Hooks

1. **Only Call Hooks at the Top Level:**
   - Don’t call Hooks inside loops, conditions, or nested functions.
   - Always use hooks at the top level of your React function, before any early returns.

2. **Only Call Hooks from React Functions:**
   - Call Hooks from React function components.
   - Call Hooks from custom Hooks (i.e., functions that start with `use` and may call other hooks).

3. **Do Not Call Hooks Conditionally:**
   - Hooks should not be called inside conditional statements.
   - Ensure hooks are called in the same order each time a component renders.

    ```jsx
    // Incorrect
    if (someCondition) {
      useState();
    }

    // Correct
    const [state, setState] = useState();
    if (someCondition) {
      // Your code here
    }
    ```

## Specific Hooks Rules

1. **`useState`:**
   - Use for adding state to a functional component.
   - Accepts the initial state and returns an array with the current state and a function to update it.

    ```jsx
    const [count, setCount] = useState(0);
    ```

2. **`useEffect`:**
   - Use for performing side effects in function components (data fetching, subscriptions, or manually changing the DOM).
   - Runs after the render and can optionally clean up after itself.

    ```jsx
    useEffect(() => {
      // Your side effect code here
      return () => {
        // Cleanup code here
      };
    }, [dependencies]);
    ```

3. **`useContext`:**
   - Use for accessing the context value from a context provider.

    ```jsx
    const value = useContext(MyContext);
    ```

4. **`useReducer`:**
   - Use for managing state with a reducer function.
   - Accepts a reducer and initial state, returns the current state and dispatch function.

    ```jsx
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

5. **`useCallback`:**
   - Use for memoizing a function to prevent it from being recreated on every render.
   - Useful for optimizing performance in child components.

    ```jsx
    const memoizedCallback = useCallback(() => {
      // Your function code here
    }, [dependencies]);
    ```

6. **`useMemo`:**
   - Use for memoizing a value to prevent expensive calculations on every render.
   
    ```jsx
    const memoizedValue = useMemo(() => {
      // Your computation here
      return computedValue;
    }, [dependencies]);
    ```

7. **`useRef`:**
   - Use for creating a mutable object that persists across renders.
   - Can be used to access a DOM element directly or keep a mutable value.

    ```jsx
    const myRef = useRef(initialValue);
    ```

8. **`useLayoutEffect`:**
   - Similar to `useEffect`, but it fires synchronously after all DOM mutations.
   - Use this to read layout from the DOM and synchronously re-render.

    ```jsx
    useLayoutEffect(() => {
      // Your code here
    }, [dependencies]);
    ```

9. **`useImperativeHandle`:**
   - Use with `forwardRef` to customize the instance value that is exposed to parent components.

    ```jsx
    useImperativeHandle(ref, () => ({
      // Methods to expose
    }), [dependencies]);
    ```

## Custom Hooks

- Create custom hooks to extract and share logic across multiple components.
- Custom hooks start with `use` and can call other hooks inside them.

```jsx
function useCustomHook() {
  const [state, setState] = useState(initialValue);
  // Your hook logic here
  return [state, setState];
}
