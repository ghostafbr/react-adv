import '../styles/styles.css'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {MyCheckBox, MySelect, MyTextInput} from '../components';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1> Formik Abstraction </h1>

            <Formik
                initialValues={{
                    firstName: 'Andrés',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('El correo no tiene un formato válido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf([ 'it-jr' ], 'Esta opción no es permitida.')
                        .required('Requerido')
                })
                }
            >
                { (formik) => (
                    <Form>
                        <MyTextInput label="First Name" name="firstName" type="text" placeholder="First Name"/>
                        <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name"/>
                        <MyTextInput label="Email" name="email" type="email" placeholder="Email"/>
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckBox label="Accept terms" name="terms" type="checkbox"/>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
