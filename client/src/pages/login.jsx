import React from 'react';
import LoginContainer from '../containers/Login';
import { ToastContainer } from "react-toastify";

import style from './page.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <div className={style.Page}>
            <LoginContainer /> 
            <ToastContainer/>
        </div>
    );
}

export default Login;
