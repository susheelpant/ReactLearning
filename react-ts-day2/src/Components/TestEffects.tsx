import { useState, useEffect, type JSX} from 'react'

function TestEffect(): JSX.Element {
  const [count, setCount] = useState(0);

  // This will run on every render
  console.log('TestEffect.Component rendered', count)

  useEffect(() => {
    // This will run only once when the component is mounted
    console.log('TestEffect.Component mounted', count)
    return () => {
      // This will run only once when the component is unmounted  
      console.log('TestEffect.Component unmounted', count)
    }
  }, []) // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div>
      <h1>Test Effect</h1>
      // This will update the count state and trigger a re-render
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default TestEffect;