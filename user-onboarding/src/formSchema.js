import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().trim().required('a name is required!').min(1, 'a name is required!'),
    email: yup.string().email('must be a valid email!').required('this is required!'),
    password: yup.string().required('you must input a password').min(8, 'password is too short- should be 8 characters minimum') .matches(/[a-zA-Z]/, 'Password can only contain letters.'),
    termsOfService: yup.boolean(),
})

export default formSchema
