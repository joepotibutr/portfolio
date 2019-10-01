import * as Yup from 'yup';

export default () => Yup.object().shape({
    fullName: Yup.string()
    .required('Required'),

    emailAddress: Yup.string()
    .email('Invalid email')
    .required('Required'),

    message: Yup.string()
    .required('Required'),
});
