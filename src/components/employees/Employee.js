import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Employee extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.employee;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr className='employee'>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <button type='button' className='btn btn-link mb-4'>
                  <Link to='/edit-employee'>
                    <i className='far fa-edit text-info mr-1' />
                  </Link>
                </button>
                <button
                  type='button'
                  className='btn btn-link mb-4'
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
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
