import React from 'react';
import { ToastContainer } from "react-toastify";

import FieldContainer from '../containers/Field';

import style from './page.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Field = () => {
    return (
        <div className={style.Page}>
            <FieldContainer /> 
            <ToastContainer/>
        </div>
    );
}

export default Field;
