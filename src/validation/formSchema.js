import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username required')
        .min(5, 'Username must be 5 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be 8 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the conditions even though you do not know what they are')

})

export default formSchema;