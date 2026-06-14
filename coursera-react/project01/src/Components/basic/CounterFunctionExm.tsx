import { useState } from "react";

// simple functional component
const CounterFunctionExm = () => {
    const [count, setCount] = useState(0);

    // simple function to handle button click 
    // // and update the count state
    const handleOnClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Another Component</h2>
            <p>Count: {count}</p>
            <button onClick={handleOnClick}>Increment</button>
        </>
    );
}

export default CounterFunctionExm;