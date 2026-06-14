import SimpleComponent from "./Components/basic/SimpleComponent";
import AnotherComponent from "./Components/basic/AnotherComponent";
import "./App.css";
import CounterFunctionExm from "./Components/basic/CounterFunctionExm";
import ClassComponentExm from "./Components/basic/ClassComponentExm";
import Greetings from "./Components/props/Greetings";
import UserCard from "./Components/props/UserCard";
import ConditionalRenderFC from "./Components/props/ConditionalRenderFC";
import UserCardStyle from "./Components/props/UserCardsStyle";
import Parent from "./Components/propdrilling/Parent";
import ParentCom from "./Components/composition/ParentCom";
import ParentCon from "./Components/contextapi/ParentCon";

function App() {
  const name = "React Learning";

  return (
    <>
      {/* Simple inline HTML Example */}
      <h1>Hello {name}!</h1>
      <p>This is a simple React app with a simple component.</p>

      {/* self-closing tag to render the component */}
      {/* Simple Component calling Example */}
      <SimpleComponent />

      <br />

      {/* Simple Multi-Component calling Example */}
      <AnotherComponent />

      {/* Simple Component with UseState and Interactive Counter Example */}
      <CounterFunctionExm />

      {/* Simple Class Component with LifeCycle Methods Example */}
      <ClassComponentExm name="React" />

      {/* Props Passing Example */}
      <Greetings name="Peter" age={20} />

      {/* Props Passing - Default and Required Example */}
      <UserCardStyle
        name="wills.gramim@example.com"
        avatar="https://i.pravatar.cc/150?img=1"
        email="www.aaa@d.com"
      />

      {/* Props passing with Nullable / Default parameter Example */}
      <UserCard
        name="Peter Wong"
        avatar="https://i.pravatar.cc/150?img=3"
        email="peter.wong@gmail.com"
      />
      <UserCard
        name="Jones Wing"
        avatar="https://i.pravatar.cc/150?img=4"
        email="jones.wing@example.com"
      />

      {/* Props Passing - Conditional Rendering Example */}
      <ConditionalRenderFC name="Pete" age={33} />

      {/* Simple Prop-Drilling Example */}
      <Parent />

      {/* Prop-Drilling With Component Composition Example */}
      <ParentCom />

      {/* Prop-Drilling With Context API Example */}
      <ParentCon />
    </>
  );
}

export default App;
