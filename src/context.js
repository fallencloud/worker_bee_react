import React, { Component } from 'react';
import axios from 'axios';
//create context
const Context = React.createContext();

//Add reducer to manipulate state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [action.payload, ...state.employees]
      };
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === action.payload.id
            ? (employee = action.payload)
            : employee
        )
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        )
      };
    default:
      return state;
  }
};

//create Provider
export class Provider extends Component {
  //create state
  state = {
    employees: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  //CRUD: Read data from API
  async componentDidMount() {
    //get data from db
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(res.data);

    //write data to state
    this.setState({
      employees: res.data
    });
  }

  //external provider
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//export consumer
export const Consumer = Context.Consumer;
