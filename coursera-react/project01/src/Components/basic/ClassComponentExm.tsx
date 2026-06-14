import { Component } from "react";

type Props = {
  name: string;
};

type State = {
  count: number;
  name: string;
};

class ClassComponentExm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("Constructor called", props);
    this.state = {
      count: 0,
      name: props.name,
    };
  }

//   componentWillMount() {
//     console.log("Component will mount");
//   }

  componentDidMount() {
    console.log("Component did mount");
  }

//   componentWillReceiveProps() {
//     console.log("Component will receive props");
//   }

  shouldComponentUpdate() {
    console.log("Should component update");
    return true;
  }

//   componentWillUpdate() {
//     console.log("Component will update");
//   }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  getSnapshotBeforeUpdate() {
    console.log("Get snapshot before update");
    return null;
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log("Get derived state from props", props, state);
    return null;
  }

  handleIncrement = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  };

  render() {
    console.log("render()");
    return (
      <div>
        <h2>Class Component Example</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>Count: {this.state.count}</p>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

ClassComponentExm.propTypes = {};

export default ClassComponentExm;
