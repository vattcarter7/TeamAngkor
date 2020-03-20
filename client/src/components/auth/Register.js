import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {
  combineValidators,
  isRequired,
  matchesField,
  matchesPattern,
  composeValidators
} from 'revalidate';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import Spinner from '../layout/Spinner';
import TextInput from '../form/TextInput';

const validate = combineValidators({
  firstname: isRequired({ message: 'First Name is required' }),
  lastname: isRequired({ message: 'Last Name is required' }),
  email: composeValidators(
    isRequired({ message: 'Email is required' }),
    matchesPattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)({
      message: 'Please enter a valid email'
    })
  )(),
  password: isRequired('password'),
  password2: matchesField('password')({
    message: 'Passwords do not match'
  })
});

const Register = ({
  handleSubmit,
  register,
  isAuthenticated,
  loading,
  error,
  invalid,
  submitting
}) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h2 className="text-center">Register</h2>
      <Form
        className="register"
        size="large"
        autoComplete="off"
        onSubmit={handleSubmit(register)}
      >
        <Segment>
          <Field
            name="firstname"
            type="text"
            component={TextInput}
            placeholder="First Name"
          />
          <Field
            name="lastname"
            type="text"
            component={TextInput}
            placeholder="Last Name"
          />
          <Field
            name="email"
            type="email"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Field
            name="password2"
            type="password"
            component={TextInput}
            placeholder="Confirm Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
            Loading={submitting}
          >
            Register
          </Button>
          <p className="text-center my-1">
            Already have an account? <Link to="/login">Sign Up</Link>
          </p>
        </Segment>
      </Form>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { register })(
  reduxForm({ form: 'registerForm', validate })(Register)
);
