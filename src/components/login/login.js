import React from 'react';
import { connect } from 'react-redux';
import { checkEmail, checkPassword } from '../../state/actions/login.actions';

const mapStateToProps = (state) => ({
    userDetails: state.register,
    matchDetails: state.login,
})

const Login = ({
  checkUserEmail,
  checkUserPassword,
  matchDetails,
  userDetails,
}) => {
return (
  <div className="formSection">
  {(matchDetails.matchUserEmail === false) && <span>Please enter correct email</span>}
    <h3>Login</h3>
      <form onSubmit={
          (e) => { e.preventDefault() }
      }>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" onBlur={
              (e) => {
                if(e.currentTarget.value === userDetails.userEmail) {
                  checkUserEmail(true);
                } else {
                  checkUserEmail(false);
                }
              }
            }/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" onBlur={
              e => {
                if(e.currentTarget.value === userDetails.password) {
                  checkUserPassword(true);
                } else {
                  checkUserPassword(false);
                }
              }
            }/>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
      </form>
  </div>
    )
}

const mapDispatchtoProps = dispatch => ({
  checkUserEmail: val => dispatch(checkEmail(val)),
  checkUserPassword: val => dispatch(checkPassword(val)),
})

export default connect(mapStateToProps, mapDispatchtoProps)(Login);