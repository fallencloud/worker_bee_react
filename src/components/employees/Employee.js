import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class Employee extends Component {
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

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
              <td>
                <span className='font-weight-bold lead'>{name}</span>
                <table>
                  <tr>
                    <th className='lead'>Phone:</th>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <th className='lead'>Email:</th>
                    <td>{email}</td>
                  </tr>
                </table>
              </td>
              <td>
                <button type='button' className='btn btn-link mb-4'>
                  <Link to={`/edit-employee/${id}`}>
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
