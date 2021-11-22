import { FormErrors } from 'redux-form'
import { IUser } from '../../helper'

const validate = (values: IUser): FormErrors<IUser> => {
        
    const errors: FormErrors<IUser> = {};

    if (!values.firstName) {
      errors.firstName = 'No values on first name'
    }else if (values.firstName.length > 10){
        errors.firstName = 'Too many symbols'
    }

    if (!values.lastName) {
      errors.lastName = 'No values on last name'
    }else if (values.lastName.length > 10){
        errors.lastName = 'Too many symbols'
    }

    if (!values.email) {
        errors.email = 'No values on email'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email'
    }

    if (!values.birthYear) {
        errors.birthYear = 'No values on birth year'
    }else if (isNaN(Number(values.birthYear))){
        errors.birthYear = 'Only numbers'
    }

    return errors
};
export default validate