import {useFormik} from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const {
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: 'Andrés',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().max(15, 'Must be 15 characters or less')
                .required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email').required('Email is required')
        }),
    });

    return (
        <div>
            <h1> Formik Yup Tutorial</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName ? <span>{errors.firstName}</span> : null}

                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName ? <span>{errors.lastName}</span> : null}

                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...getFieldProps('email')} />
                {touched.email && errors.email ? <span>{errors.email}</span> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
