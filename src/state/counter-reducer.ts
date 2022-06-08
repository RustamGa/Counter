import {useDispatch} from "react-redux";

type StateType = {
    startValue: number
    maxValue: number
    count: number
    counterMessage: 'press set' | 'incorrect number' | null
    resDisable: boolean
    setDisable: boolean
    incDisable: boolean
}
type IncDataActionType = ReturnType<typeof IncDataAC>
type ResDataActionType = ReturnType<typeof ResDataAC>
type ChangeMaxValueActionType = ReturnType<typeof ChangeMaxValueAC>
type ChangeStartValueActionType = ReturnType<typeof ChangeStartValueAC>
type OnSetValueActionType = ReturnType<typeof OnSetValueAC>


export const IncDataAC = () => {
    return {
        type: 'INC-DATA',
    } as const
}
export const ResDataAC = () => {
    return {
        type: 'RES-DATA',
    } as const
}
export const ChangeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}
export const ChangeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            startValue
        }
    } as const
}
export const OnSetValueAC = () => {
    return {
        type: 'ON-SET-VALUE',
    } as const
}

type ActionsType = IncDataActionType | ResDataActionType | ChangeMaxValueActionType| ChangeStartValueActionType | OnSetValueActionType

const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    resDisable: false,
    setDisable: true,
    incDisable: false,
    counterMessage: null
}


export const counterReducer = (state: StateType=initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INC-DATA': {
            let newState = {...state}
            newState.count = state.count + 1
            if (state.count < state.maxValue) {
                (newState = {...state, count: newState.count})
            }
            if (newState.count === state.maxValue) {
                (newState = {...state, count: newState.count, incDisable: true})
            }
            return newState;
        }
        case 'RES-DATA': {
            return {...state, count: state.startValue, incDisable: false}
        }
        case 'CHANGE-MAX-VALUE': {
            if (action.payload.maxValue < 0 || state.startValue === action.payload.maxValue || action.payload.maxValue < state.startValue)
                return {
                    ...state,
                    maxValue: action.payload.maxValue,
                    setDisable: true,
                    counterMessage: "incorrect number",
                    incDisable: true,
                    resDisable: true
                }
            else return {
                ...state,
                count: 0,
                maxValue: action.payload.maxValue,
                setDisable: false,
                counterMessage: "press set",
                incDisable: true,
                resDisable: true,
            }
        }
        case 'CHANGE-START-VALUE' : {
            if (action.payload.startValue < 0 || action.payload.startValue === state.maxValue || action.payload.startValue > state.maxValue)
                return {
                    ...state,
                    startValue: action.payload.startValue,
                    setDisable: true,
                    counterMessage: "incorrect number",
                    incDisable: true,
                    resDisable: true

                }
            else return {
                ...state,
                startValue: action.payload.startValue,
                setDisable: false,
                counterMessage: "press set",
                incDisable: true,
                resDisable: true
            }
        }
        case 'ON-SET-VALUE': {
            return {
                ...state,
                count: state.startValue,
                setDisable: true,
                counterMessage: null,
                resDisable: false,
                incDisable: false
            }
        }

        default:
            return state
    }
}