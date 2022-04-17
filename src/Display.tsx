import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    count: number
    valueInputMax: number
    valueInputStart: number
    edit: string | null

}

const Display = (props: DisplayPropsType) => {

    let result = props.edit === "Incorrect value" ? s.errorMessage : s.good
    let resultColor = props.count === props.valueInputMax ? s.red_count : s.count_wrapper

    return (
        <div className={s.displayWrapper}>
            {props.edit
                ? <div className={result}>{props.edit}</div>
                : <div className={resultColor}> {props.count}</div>}
        </div>
    );
};

export default Display;





