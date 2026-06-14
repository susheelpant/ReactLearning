

const GrandChild = ({ person }: { person: {name: string, age: number}}) => 
    <><h2>Prop Drilling Example </h2> <p>{person.name} with Age: {person.age}</p></>;

export default GrandChild;