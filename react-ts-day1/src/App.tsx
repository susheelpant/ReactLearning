import { type JSX } from 'react'
import Greetings, {Greetings2} from './Components/Greetings.tsx'
import Counter from './Components/Counter.tsx'

import './App.css'

// App.tsx → First React componentmain UI component
// A component is just a function that returns UI -HTML/JSX
// App() is a function - It returns JSX (HTML-like syntax)
// React renders it to the browser


// : JSX.Element = return type of component
// It tells TypeScript => This function must return React UI
function App(): JSX.Element {

  return (
    <div>
      {/* Passing data with props to child components */}
      { /* props = input to component */}
      {/* props are passed as attributes to the component */}
      {/* props can be passed as a single object or destructured */}
      {/* props are read-only - cannot be modified by the component */}
      <Greetings name="Alice" role="Developer" />
      <Greetings2 name="Bob" role="Designer" />

      <h1>Hello, TypeScript + React!</h1>
      <p>This is a simple React application using TypeScript.</p>

      {/* State management using useState hook example */}
      <Counter />

    </div>
  );
}

export default App
