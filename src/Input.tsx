import React, {ChangeEvent} from 'react';
import './App.css'

type InputPropsType = {
    title: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    classRed: string
}

const Input = (props: InputPropsType) => {
    return (
        <>
            <div className="max">
                {props.title} <input className={props.classRed}
                                     type='number'
                                     onChange={props.onChange}
                                     value={props.value}/>
            </div>
        </>
    );
};

export default Input;