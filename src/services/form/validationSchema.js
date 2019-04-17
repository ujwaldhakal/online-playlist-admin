import Yup from 'yup'

export default function getYupValidationSchema(values) {
    return Yup.object().shape({
        email: Yup.string()
          .email('E-mail is not valid!')
          .required('E-mail is required!'),
        password: Yup.string()
          .min(6, `Password has to be longer than 6 characters!`)  
          .required('Password is required!'),
        passwordConfirmation: Yup.string()
          .oneOf([values.password], 'Passwords are not the same!')
          .required('Password confirmation is required!'),
    })
}
