import React, { Component } from 'react';
import { Consumer } from '../../context';

class Employee extends Component {
  render() {
    const { id, name, email, phone } = this.props.employee;
    return (
      <Consumer>
        {value => {
          return (
            <tr className='employee'>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <button type='button' className='btn btn-link mb-4'>
                  <a href='edit-employee.html'>
                    <i className='far fa-edit text-info mr-1' />
                  </a>
                </button>
                <button type='button' className='btn btn-link mb-4'>
                  <i className='far fa-trash-alt' />
                </button>
              </td>
            </tr>
          );
        }}
      </Consumer>
    );
  }
}

export default Employee;
