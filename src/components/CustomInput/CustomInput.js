import React from 'react';
import s from './CustomInput.module.css'
const CustomInput = ({type, placeholder}) => {
    return (
        <div className={s.customInput}>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;