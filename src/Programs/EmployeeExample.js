import React from 'react';
import '../App.css';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedSalary: null,
    };
    // Bind the method to the class instance
    this.getUpdatedSalary = this.getUpdatedSalary.bind(this);
  }

  getUpdatedSalary(salary) {
    this.setState({ updatedSalary: salary });
  }

  render() {
    return (
      <div>
        <p><label>Name:<b>{this.props.name}</b></label></p>
        <p><label>Location:<b>{this.props.location}</b></label></p>
        <p><label>Total Salary:<b>{this.props.totalSalary}</b></label></p>
        <p><label>Updated Salary:<b>{this.state.updatedSalary}</b></label></p>
        <Salary 
          basic={this.props.basic} 
          hra={this.props.hra} 
          bonus={this.props.bonus} 
          onChangeSalary={this.getUpdatedSalary} 
        />
      </div>
    );
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    // Create refs for form inputs
    this.basicRef = React.createRef();
    this.hraRef = React.createRef();
    this.bonusRef = React.createRef();
    // Bind the method to the class instance
    this.updateSalary = this.updateSalary.bind(this);
    if(!this.updateSalary){
      this.updateSalary = parseInt(this.props.basic) + parseInt(this.props.hra) + parseInt(this.props.bonus);
    }
  }

  updateSalary() {
    const basic = parseInt(this.basicRef.current.value || '0');
    const hra = parseInt(this.hraRef.current.value || '0');
    const bonus = parseInt(this.bonusRef.current.value || '0');
    const total = basic + hra + bonus;
    this.props.onChangeSalary(total);
  }

  render() {
    return (
      <div>
        <p><label>Basic Salary:<b><input type="text" ref={this.basicRef} defaultValue={this.props.basic}/></b></label></p>
        <p><label>HRA:<b><input type="text" ref={this.hraRef} defaultValue={this.props.hra}/></b></label></p>
        <p><label>Bonus:<b><input type="text" ref={this.bonusRef} defaultValue={this.props.bonus}/></b></label></p>
        <p><button onClick={this.updateSalary}>Update Salary</button></p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
       <Employee name="Murali" location="Hyderabad" totalSalary="1000" updatedSalary="10000" basic="100" hra="200" bonus="300"/>
    </div>
  );
}

export default App;
