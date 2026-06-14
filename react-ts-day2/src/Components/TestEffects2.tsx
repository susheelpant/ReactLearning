import { useState, useEffect, type JSX} from 'react'

function TestEffects2(): JSX.Element {
  const [count, setCount] = useState(0);

  // This will run on every render
  console.log('TestEffects2.Component rendered', count)

  useEffect(() => {
    // This will run only when the component is mounted
    // will show the last count value
    console.log('TestEffects2.Component mounted', count)
    return () => {
      // This will run only when the component is unmounted  
      // will show the new count value
      console.log('TestEffects2.Component unmounted', count)
    }
  }, [count]) 
  // Dependency array with count means this effect runs when count changes

  return (
    <div>
      <h1>Test Effects 2</h1>
      // This will update the count state and trigger a re-render
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default TestEffects2;