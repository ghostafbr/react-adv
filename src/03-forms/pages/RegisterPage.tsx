import '../styles/styles.css'
import {useForm} from '../hooks/useForm';

export const RegisterPage = () => {

    const { name, email, password, confirmPassword, handleInputChange, handleSubmit, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                    className={`${name.trim().length <= 0 && 'has-error'} ${name.trim().length > 0 && name.trim().length < 3 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span className="error">Name is required</span>}
                {name.trim().length > 0 && name.trim().length < 3 && <span className="error">Name must be at least 3 characters</span>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span className="error">Email is not valid</span>}
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                {password.trim().length <= 0 && <span className="error">Password is required</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span className="error">Password must be at least 6 characters</span>}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleInputChange }
                />
                {confirmPassword.trim().length <= 0 && <span className="error">This field is required</span>}
                {confirmPassword.trim().length > 0 && password === confirmPassword && <span className="error">Passwords do not match</span>}

                <button type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    );
};
