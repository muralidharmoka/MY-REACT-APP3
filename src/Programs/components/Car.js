import react, { Component } from "react";

//Regular funcction
function Car1(props) {
  return <p>{props.brand}</p>;
}

//Arrow function
const Car2 = (props) => {
  return <p>{props.brand}</p>;
};

//Anonymous function
const Car3 = function (props) {
  return (
    <div>
      <p>{props.brand}</p>
      <p>{props.children}</p>
    </div>
  );
};

interface CarProps {
  name: string;
}

class Car extends react.Component<CarProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.name}</p>;
  }
}

export default Car;
