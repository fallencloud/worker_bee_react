import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditEmployee extends Component {
  render() {
    return (
      <div class='edit-employee'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 m-auto'>
              <Link to='/' class='btn btn-light'>
                Go Back
              </Link>
              <h1 class='display-4 text-center'>Edit An Employee</h1>
              <form>
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
                <input type='submit' class='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditEmployee;
