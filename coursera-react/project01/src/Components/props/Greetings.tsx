
// Define the props type
type GreetingsPropTypes = {
    name: string, // required string prop
    age?: number // optional number prop
}

// Define the component with props type
const Greetings: React.FC<GreetingsPropTypes> = ({name, age}) =>{
 return (
    <div>
        <h2>Props Passing Example</h2>
        <p>Greetings, {name}. Age: {age}</p>
    </div>
 )   
}

export default Greetings;