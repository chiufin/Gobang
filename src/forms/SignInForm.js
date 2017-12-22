import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderField from '../components/RenderField'

const validate = values => {
  const errors = {}
  if (!values.account) {
    errors.account = 'Required'
  } 
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}


let SignInForm = props => {
  const { handleSubmit, pristine, submitting  } = props
  return (
    <form onSubmit={handleSubmit}>
        <Field name="account"
               type="text"
               component={RenderField}
               label="account"
        />
        <Field name="password"
               type="password"
               component={RenderField}
               label="password"
        />
      <button type="submit" disabled={pristine || submitting} >Submit</button>
    </form>
  )
}

SignInForm = reduxForm({
  // a unique name for the form
  form: 'signIn',
  validate
})(SignInForm)

export default SignInForm