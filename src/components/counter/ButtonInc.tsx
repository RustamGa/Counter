import React from "react";
import s from "./Counter.module.css"
export type PropsType = {
    callBack: ()=>void
    value: string
    displayValue: number
    maxValue:number
}

export function ButtonInc (props:PropsType) {
    return (
        <button disabled={props.displayValue===props.maxValue} className={s.button} onClick={()=> props.callBack()}>
            {props.value}
        </button>
    )
}

