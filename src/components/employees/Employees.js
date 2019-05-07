import React, { Component } from 'react';
import { Consumer } from '../../context';
import Employee from './Employee';

class Employees extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { employees } = value;
          return (
            <div className='dashboard'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    {/*<!-- Dashboard Actions -->*/}
                    <button type='button' className='btn btn-link mb-4'>
                      <i className='fas fa-user-circle text-info mr-1' />
                      <a href='add-employee.html'>Add Employee</a>
                    </button>

                    {/*<!-- Employees -->*/}
                    <div>
                      <h4 className='mb-2'>Employee Directory</h4>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit/Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employees.map(employee => (
                            <Employee key={employee.id} employee={employee} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Employees;
