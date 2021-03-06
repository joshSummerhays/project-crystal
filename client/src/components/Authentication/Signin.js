import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from './authAction';
import Footer from '../App/Footer';
import './auth.css';
import { Link } from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  facebookLogin() {
    this.props.facebookLogin();
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div className="signin--box">
        <div className="hero__overlay">
          <div className="signin__overlay">
            <Link to="/" className="logo__auth">Sparkq</Link>
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
              <h6 className="signin--box__title">
                Self awareness in a relationship makes all the difference...</h6>
              <fieldset className="form-group">
                <div className="input-field">
                  <input type="email" className="auth__input form-control validate form__input__general" {...email} />
                  <label>
                    <i className="icon material-icons">email</i>
                    <span className='form__words'>Email:</span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="input-field">
                  <input type="password"
                         className="auth__input form-control validate form__input__general" {...password} />
                  <label>
                    <i className="icon material-icons">lock</i>
                    Password:
                  </label>
                </div>
              </fieldset>
              <div className="signin__btn">
                <button
                  action="submit"
                  className="form__btn btn btn-primary waves-effect waves-light btn-large"
                >Sign In
                </button>
                <div className="signin__alert">
                  {this.renderAlert()}
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
};

// First arg is for configuration and second set of parenthesis is for the
// Component This gives us access to 'this.props.email' & 'this.props.password'
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin);
