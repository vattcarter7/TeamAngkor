import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Spinner from '../layout/Spinner';
import TextInput from '../form/TextInput';
import {
  combineValidators,
  isRequired,
  matchesPattern,
  composeValidators
} from 'revalidate';

const validate = combineValidators({
  email: composeValidators(
    isRequired({ message: 'Email is required' }),
    matchesPattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)({
      message: 'Please enter a valid email'
    })
  )(),
  password: isRequired('password')
});

const Login = ({
  login,
  isAuthenticated,
  handleSubmit,
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
      <h2 className="text-center">Login</h2>
      <Form
        className="login"
        size="large"
        autoComplete="off"
        onSubmit={handleSubmit(login)}
      >
        <Segment>
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
            Login
          </Button>
          <p className="text-center my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Segment>
      </Form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { login })(
  reduxForm({ form: 'loginForm', validate })(Login)
);
