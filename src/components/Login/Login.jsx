import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"login"} type="text" placeholder="Login" />
            <Field component={"input"} name={"password"} type="text" placeholder="Password" />
            <Field component={"input"} name={"rememberMe"} type="checkbox" /> remember me
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