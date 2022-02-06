import React, {useState} from 'react';
// import {ButtonInc} from './ButtonInc';
// import {Display} from './Display';
// import {ButtonRes} from "./ButtonIncRes";
// import {SettingDisplay} from "./SettingDisplay";
// import {ButtonSet} from "./ButtonSet";
// import {Button} from "./Button";
//
// type CounterPropsType = {
//     count: number
//     incData: () => void
//     resData: () => void
//     maxValue: number
//     onChangeMaxValue: (maxValue:number)=>void
//     onChangeStartValue:(startValue:number)=>void
//     onSetValue: ()=>void
//     startValue:number
//     setDisable:boolean
// }
//
// export function Counter(props: CounterPropsType) {
//
//     return (
//         <div>
//             <div>
//                 <SettingDisplay
//                     displayValue={props.count}
//                     onChangeMaxValue={props.onChangeMaxValue}
//                     onChangeStartValue={props.onChangeStartValue}
//                 />
//                 <ButtonSet disable={props.setDisable} value={"Set"} displayValue={props.count} onSetValue={props.onSetValue}/>
//             </div>
//             <div>
//                 <Display maxValue ={props.maxValue} displayValue={props.count}/>
//                 <Button value ={props.maxValue} callBack={() => props.incData()} title={"Inc"} displayValue={props.count}/>
//                 <Button value={props.startValue} callBack={() => props.resData()} title={"Reset"} displayValue={props.count}/>
//
//             </div>
//         </div>
//     )
//
// }
