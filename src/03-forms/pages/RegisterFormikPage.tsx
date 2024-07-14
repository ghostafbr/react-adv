import '../styles/styles.css'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {MyTextInput} from '../components';

export const RegisterFormikPage = () => {

    interface InitialValues {
        name: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    const initialValues: InitialValues = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().min(2, 'Must be at least 2 characters')
                        .required('Name is required'),
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    password: Yup.string().min(6, 'Must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
            >

                { formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <MyTextInput label={'Name'} name={'name'} type={'text'} />
                        <MyTextInput label={'Email'} name={'email'} type={'email'} />
                        <MyTextInput label={'Password'} name={'password'} type={'password'} />
                        <MyTextInput label={'Confirm Password'} name={'confirmPassword'} type={'password'} />

                        <button type={'submit'}>Submit</button>
                        <button type={'reset'} onClick={formik.handleReset}>Reset</button>
                    </form>
                )}

            </Formik>
        </div>
    );
};
