import React, {useState} from 'react';
import './App.css';

import {SettingDisplay} from "./components/counterSetting/SettingDisplay";
import {ButtonSet} from "./components/counterSetting/ButtonSet";
import {Display} from "./components/counter/Display";
import {Button} from "./components/counter/Button";

type stateType = {
    startValue: number
    maxValue: number
    count: number
    counterMessage: 'press set' | 'incorrect number' | null
    resDisable: boolean
    setDisable: boolean
    incDisable: boolean
}

function App() {
    let [state, setDisplayValue] = useState<stateType>(
        {
            startValue: 0,
            maxValue: 5,
            count: 0,
            resDisable: false,
            setDisable: true,
            incDisable: false,
            counterMessage: null
        })
    let incData = () => {
        let newCount = state.count + 1
        if (state.count < state.maxValue) {
            setDisplayValue({...state, count: newCount})
        }
        if (newCount === state.maxValue) {
            setDisplayValue({...state, count: newCount, incDisable: true})
        }
    }
    let resData = () => {
        setDisplayValue({...state, count: state.startValue, incDisable: false})
    }
    let changeMaxValue = (maxValue: number) => {
        if (maxValue < 0 || state.startValue === maxValue || maxValue < state.startValue) {
            setDisplayValue({
                ...state,
                maxValue: maxValue,
                setDisable: true,
                counterMessage: "incorrect number",
                incDisable: true,
                resDisable: true
            })
        } else {
            setDisplayValue({
                ...state,
                maxValue: maxValue,
                setDisable: false,
                counterMessage: "press set",
                incDisable: true,
                resDisable: true,
            })
        }
    }

    let changeStartValue = (startValue: number) => {
        if (startValue < 0 || startValue === state.maxValue || startValue > state.maxValue) {
            setDisplayValue({
                ...state,
                startValue: startValue,
                setDisable: true,
                counterMessage: "incorrect number",
                incDisable: true,
                resDisable: true

            })
        } else {
            setDisplayValue(
                {
                    ...state,
                    startValue: startValue,
                    setDisable: false,
                    counterMessage: "press set",
                    incDisable: true,
                    resDisable: true
                }
            )
        }
    }
    let onSetValue = () => {
        setDisplayValue(
            {
                ...state,
                count: state.startValue,
                setDisable: true,
                counterMessage: null,
                resDisable: false,
                incDisable: false
            }
        )
    }
    return (
        <div className="appWrapper">
            <div className="counterSettings">
                <div>
                    <SettingDisplay
                        startValue={state.startValue}
                        maxValue={state.maxValue}
                        onChangeMaxValue={changeMaxValue}
                        onChangeStartValue={changeStartValue}
                    />
                </div>
                <div className="buttonBlock">
                    <Button
                        callBack={() => onSetValue()}
                        title={"Set"}
                        disabled={state.setDisable}/>
                    {/*<ButtonSet disable={state.setDisable} value={"Set"} displayValue={state.count}*/}
                    {/*           onSetValue={onSetValue}/>*/}
                </div>
            </div>
            <div className="Counter">
                <div>
                    <Display maxValue={state.maxValue}
                             displayValue={state.count}
                             counterMessage={state.counterMessage}/>
                </div>
                <div className="buttonBlock">
                    <Button
                        callBack={() => incData()}
                        title={"Inc"}
                        disabled={state.incDisable}/>
                    <Button
                        callBack={() => resData()}
                        title={"Reset"}
                        disabled={state.resDisable}
                    />
                </div>
            </div>

        </div>
    );
}

export default App;
