import GrandChildCom from "./GrandChildCom";
import ChildCom from "./ChildCom";

// Passes React.ReactNode to Child and not regular props
const ParentCom = () => {
  const person = { name: "Jonathan", age: 33};

  return (
    <ChildCom>
      <GrandChildCom person={person} />
    </ChildCom>
  );
};

export default ParentCom;
