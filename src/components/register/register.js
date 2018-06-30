import { connect } from 'react-redux';
import React from 'react';
import './register.css';

import {getEmail, getPassword} from '../../state/actions/register.action';

const Register = ({
    sendEmail,
    sendPassword,
}) => {
  return (
    <div className="formSection">
    <h3>Registration</h3>
      <form onSubmit={(e) => {
          e.preventDefault();
      }}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" onChange={(ev) => {
                sendEmail(ev.currentTarget.value);
            }} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" onChange={
              (ev) => {
                sendPassword(ev.currentTarget.value);
              }
            } />
          </div>
          <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
    sendEmail: val => dispatch(getEmail(val)),
    sendPassword: val => dispatch(getPassword(val)),
})

export default connect(null, mapDispatchToProps)(Register);