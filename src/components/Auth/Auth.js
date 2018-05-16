import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import { PageHeader, Form } from 'react-bootstrap';
import FormField from './../common/FormField';
import FormSubmit from './../common/FormSubmit';
import { loginSagaActions } from './../../sagas/login';


export class AuthEditor extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(values) {
    const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: loginSagaActions.LOGIN,
        values,
        callbackError: (error) => {
          reject(new SubmissionError({ _error: error }));
        },
        callbackSuccess: () => {
          resolve();
          browserHistory.push('/');
        },
      });
    });
  }

  render() {
    const {
      handleSubmit,
      error,
      invalid,
      submitting,
    } = this.props;
    return (
      <div className="page-container login">
        <PageHeader>Вход в систему</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="username" label="Пользователь" />
          <Field type="password" component={FormField} name="password" label="Пароль" />
          <FormSubmit
            error={error}
            invalid={invalid}
            submitting={submitting}
            buttonSaveLoading="login in..."
            buttonSave="Вход"
          />
        </Form>
      </div>
    );
  }
}

const AuthEditorForm = reduxForm({
  form: 'login',
  validate(values) {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.username = 'Password is required';
    }
    return errors;
  },
})(AuthEditor);

function mapStateToProps(state) {
  const { form = {} } = state;
  const { login = {} } = form;
  const { values = {} } = login;
  return {
    values,
    initialValues: {},
  };
}

export default connect(mapStateToProps)(AuthEditorForm);
