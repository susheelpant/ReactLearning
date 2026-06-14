// receives props from Grand Parent
const GrandChildCom = ({ person }: { person: {name: string, age: number}}) => <><h2>Composition Example in Prop Drilling Example </h2> <p>{person.name} with Age: {person.age}</p></>;

export default GrandChildCom;


