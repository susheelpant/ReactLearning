// props example - 2 ways to consume props in a functional component
import type { JSX } from "react";

// Define a type for the props that the Greetings component will receive
type Person = {
  name: string;
  role: string;
}
// props = input to component
// props are passed as attributes to the component
// props can be passed as a single object or destructured
// props are read-only - cannot be modified by the component

// Allows Reusing UI logic
// Allows dynamic UI

// props passed as a single object - (person: Person)
function Greetings(person: Person): JSX.Element {
  return (
    <div>
      <h1>Hello, {person.name}!</h1>
      <p>Your role is: {person.role}</p>
    </div>
  );
}

// destructuring props - ({ name, role }: Person)
// export multiple components from the same file - export function Greetings2
export function Greetings2({ name, role }: Person): JSX.Element {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your role is: {role}</p>
    </div>
  );
}

export default Greetings;
