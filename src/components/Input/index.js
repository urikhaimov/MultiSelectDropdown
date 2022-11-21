import React from 'react';
import './style.css'
const Input = ({ onChange, onClick, value, placeHolder, type = 'text', className = 'input' }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeHolder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                onClick={onClick || null} />
        </>
    );
}
export default Input;  