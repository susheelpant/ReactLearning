React + TypeScript DAY #2

Learn:

  useEffect
  Component lifecycle
  Fetching data
  Loading state
  Error state

These are used in almost every React application.

useEffect = run code after render

  Component Created
        ↓
  Render UI
        ↓
  useEffect Runs
        ↓
  User Interacts
        ↓
  State Changes
        ↓
  Re-render

3 Different ways to implement useEffect:


  useEffect(() => {
    // This will run only once when the component is mounted
    console.log('Loading...')
  }, []) 
  // Empty dependency array means this effect runs only onnce


  useEffect(() => {
    // This will run only once when the component is mounted
    console.log('TestEffect.Component mounted', count)
    return () => {
      // This will run only once when the component is unmounted  
      console.log('TestEffect.Component unmounted', count)
    }
  }, []) // Empty dependency array means this effect runs only on mount and unmount


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
