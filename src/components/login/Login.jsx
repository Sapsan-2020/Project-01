import React from 'react';
import s from './Login.module.css';
import style from '../common/FormsControls/formsControls.module.css';

import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/formsControls.js';
import {required} from '../../../src/utils/validators/validators';
import {login} from '../../redux/auth-reducer';
//import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                    <div> 
                    <Field placeholder={"Email"} validate={[required]} name={"emale"} component={Input}/>
                    </div>
                    <div> 
                    <Field placeholder={"Password"} validate={[required]} name={"password"} type={"password"} component={Input}/> 
                    </div>
                    <div> 
                    <Field  component={Input} name={"rememberMe"} type={"checkbox"}/> remember me 
                    </div>
                   { props.error &&  <div className={style.formSummaryError}>
            {props.error}
            </div> }
                    <div> 
                    <button> Login</button> 
                    </div>
                </form>
            
            );
                
           
}
const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.emale, formData.password, formData.rememberMe);
;
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    };
    return (
    <div>
                <h1> LOGIN </h1>
                <LoginReduxForm onSubmit={onSubmit} />
    
    </div>
) ;
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);

