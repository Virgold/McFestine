import React from 'react';

const Button = ({ text, styles }) => {
    return (
        <button className={`${ styles } shrink-0`}>{text}</button>
    );
}

export default Button;
