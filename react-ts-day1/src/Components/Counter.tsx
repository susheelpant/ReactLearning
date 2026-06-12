// useState hook example
// 3 ways to update state - simple form, lambda form and literal form
import { useState, type JSX } from 'react';

// State (useState) allows memory inside a component.

// setCount() updates state =>
// React re-renders component => 
// UI updates automatically
function Counter(): JSX.Element {
    // useState is a hook that allows you to add state to a functional component
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Counter: {count}</h1>
        {/* simple form - using the current state value to update the state */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        {/* lambda form - pass a function to update the state based on the previous state */}
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
        <br />
        {/* literal form - to update the state with a specific value */}
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;