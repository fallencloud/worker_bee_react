import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';

class AddEmployee extends Component {
  //form state
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    //get current input values from state
    const { name, email, phone } = this.state;

    const newEmployee = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });

    //reset form
    this.setState({
      name: '',
      email: '',
      phone: ''
    });

    //return to dashboard
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='add-employee'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 m-auto'>
                    <Link to='/' className='btn btn-light'>
                      Go Back
                    </Link>
                    <h1 className='display-4 text-center'>Add An Employee</h1>
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        type='text'
                        name='name'
                        placeholder='* Name'
                        value={name}
                        onChange={this.onChange}
                      />
                      <TextInputGroup
                        type='text'
                        name='email'
                        placeholder='* Email'
                        value={email}
                        onChange={this.onChange}
                      />

                      <TextInputGroup
                        type='text'
                        name='phone'
                        placeholder='* Phone'
                        value={phone}
                        onChange={this.onChange}
                      />
                      <input
                        type='submit'
                        className='btn btn-info btn-block mt-4'
                      />
                    </form>
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

export default AddEmployee;
