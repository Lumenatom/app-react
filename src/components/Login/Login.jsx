import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormsControl/FormsControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                validate={[required]}
                name={"login"} type="text" placeholder="Login" />
            <Field component={Input}
                validate={[required]}
                name={"password"} type="text" placeholder="Password" />
            <Field component={Input}
                name={"rememberMe"} type="checkbox" /> remember me
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>



}

export default Login;