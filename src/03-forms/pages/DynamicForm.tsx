import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {MySelect, MyTextInput} from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.message);
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, rule.message);
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.message);
        }

        // ...others rules
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {(formik) => (
                    <Form>
                        {
                            formJson.map(({type, name, placeholder, label, options}) => {

                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return <MyTextInput
                                        key={name}
                                        type={(type as any)}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />;
                                } else if (type === 'select') {
                                    return <MySelect label={label} name={name} key={name}>
                                        <option value="">Select a game</option>
                                        {
                                            options?.map(({id, label}: any) => {
                                                return <option key={id} value={id}>{label}</option>;
                                            })
                                        }
                                    </MySelect>;
                                }

                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};
