import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormsControl/FormsControl";
import { login } from "../../redux/auth-reducer.js"
import { Navigate } from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                validate={[required]}
                name={"email"} type="text" placeholder="email" />
            <Field component={Input}
                validate={[required]}
                name={"password"} type="password" placeholder="Password" />
            <Field component={Input}
                name={"rememberMe"} type="checkbox" /> remember me
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);