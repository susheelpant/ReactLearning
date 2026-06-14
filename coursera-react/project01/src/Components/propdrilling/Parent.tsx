import Child from "./Child";

const Parent = () => {
const person = { name: "Victor", age: 25};

  return <Child person={person} />;
};
export default Parent;
