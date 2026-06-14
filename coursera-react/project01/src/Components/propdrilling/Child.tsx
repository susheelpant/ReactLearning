import GrandChild from "./GrandChild";

const Child = ({ person }: { person: {name: string, age: number}}) => <GrandChild person={person} />;

export default Child;
