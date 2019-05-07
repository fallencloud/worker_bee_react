import React, { Component } from 'react';

class AddEmployee extends Component {
  render() {
    return (
      <div className='add-employee'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <a href='dashboard.html' className='btn btn-light'>
                Go Back
              </a>
              <h1 className='display-4 text-center'>Add An Employee</h1>
              <form action='login.html'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='* Name'
                    name='name'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='* Email'
                    name='email'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='* Phone number'
                    name='phone'
                  />
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
