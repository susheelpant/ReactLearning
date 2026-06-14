import UserContext from "./SomeContext";
import ChildCon from "./ChildCon";


function ParentCon() {
  const person = { name: "Peter", age: 19};

  return (
    <UserContext.Provider value={person}>
      <ChildCon />
    </UserContext.Provider>
  );
} 

export default ParentCon;