import '../styles/styles.css'
import {FormikErrors, useFormik} from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<any> = {};

        if (!firstName) {
            errors.firstName = 'First name is required';
        } else if (firstName.length > 15) {
            errors.firstName = 'First name must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Last name is required';
        } else if (lastName.length >= 10) {
            errors.lastName = 'Last name must be 20 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: 'Andrés',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    });

    return (
        <div>
            <h1> Formik Basic Tutorial</h1>

            <form  onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {
                    touched.firstName && errors.firstName ? <span>{errors.firstName}</span> : null
                }
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {
                    touched.lastName && errors.lastName ? <span>{errors.lastName}</span> : null
                }
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {
                    touched.email && errors.email ? <span>{errors.email}</span> : null
                }
                <button type="submit">Submit</button>

            </form>


        </div>
    );
};
