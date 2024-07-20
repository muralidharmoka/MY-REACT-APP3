import React from "react";
class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ border: "2px solid red", width: "500px" }}>
        <p>
          <b>Name:</b>
          <label>{this.props.name}</label>
        </p>
        <p>
          <b>Age:</b> <label>{this.props.age}</label>
        </p>
        <p>
          <b>Place:</b> <label>{this.props.place}</label>
        </p>
      </div>
    );
  }
}

export default Users;
