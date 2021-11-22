import React from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import validate from './validate'
import './Form.sass'

interface Props {
    onSubmit: any
}


const renderField: React.FC = ({ input, label, type, meta: { touched, error } }: any) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const UserForm: React.FC< Props & InjectedFormProps<{}, Props>> = (props) => {
    const { handleSubmit, submitting, onSubmit } = props
    return (
        <form className="Form-container"
            onSubmit={handleSubmit(onSubmit)}>
            <Field
                name="firstName"
                component={renderField}
                type="text"
                label="First name" 
                />
            <Field 
                name="lastName"
                component={renderField}
                type="text"
                label="Last name" />
            <Field 
                name="email"
                component={renderField}
                type="text"
                label="Email" />

            <Field 
                name="birthYear"
                component={renderField}
                type="text"
                label="Birth year" />

            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    )
}

export const Form = reduxForm<{}, Props>({
    form: 'userForm',
    validate
  })(UserForm)
  
export default connect(null)(Form);
