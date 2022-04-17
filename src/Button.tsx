import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    callBack: () => void
    disabled: boolean
    name: string

}

const Button = (props: ButtonPropsType) => {
    const buttonHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button className={`${s.btn} ${props.disabled ? s.disabled : ""}`}
                    onClick={buttonHandler}> {props.name}</button>
        </div>
    );
};

export default Button;

