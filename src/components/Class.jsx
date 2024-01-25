import React from "react";

class Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0,
    };
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hi, {name}</h1>
        <h1>Age: {this.state.age}</h1>
        <button onClick={() => this.setState({age: this.state.age + 1})}>Increase age</button>
      </div>
    );
  }
}

export default Class;
