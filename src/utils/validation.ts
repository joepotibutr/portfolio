import * as Yup from 'yup';

export default Yup.object().shape({
    fullName: Yup.string()
    .required('Full name is required'),

    emailAddress: Yup.string()
    .email('Invalid email')
    .required('Email address is required'),

    message: Yup.string()
    .required('Message is required'),
});
