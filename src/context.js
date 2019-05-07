import React, { Component } from 'react';

//create context
const Context = React.createContext();

//create Provider
export class Provider extends Component {
  //create state
  state = {
    employees: [
      {
        id: 1,
        name: 'Sharina V. Jones',
        email: 'sharina@exmaple.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'John Dough',
        email: 'jmoney@example.com',
        phone: '333-333-3333'
      }
    ]
  };

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
