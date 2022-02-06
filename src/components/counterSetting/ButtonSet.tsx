import React from "react";
import s from "../counterSetting/Button.module.css"

export type PropsType = {
    value: string
    displayValue: number
    onSetValue: () => void
    disable: boolean
}

export function ButtonSet(props: PropsType) {
    return (
        <button className={s.buttonStyle} disabled={props.disable} onClick={props.onSetValue}>
            {props.value}
        </button>
    )
}


