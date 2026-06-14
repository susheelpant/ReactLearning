import { useContext } from 'react';
import SomeContext from './SomeContext';

const GreatGrandChildCon=()=> {
  const person = useContext(SomeContext);

  return <><h2>Context API in Prop Drilling Example </h2> <p>{person.name} with Age: {person.age}</p></>;
}

export default GreatGrandChildCon;