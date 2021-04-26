import React from 'react';
import s from './CustomButton.module.css'

const CustomButton = ({title, background, color, onClick}) => {
    return (
        <div className={s.customButton}>
            <button style={{background: background, color: color}} onClick={onClick}>{title}</button>
        </div>
    );
};

export default CustomButton;