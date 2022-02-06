import React from "react";
import s from "./Counter.module.css"
export type PropsType = {
    callBack: ()=>void
    value: string
    displayValue: number
    startValue:number
}

export function ButtonRes (props:PropsType) {
    return (
        <button disabled={props.displayValue===props.startValue} className={s.button} onClick={()=> props.callBack()}>
            {props.value}
        </button>
    )
}