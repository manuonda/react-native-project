// enum InputActions {
//     INPUT_CHANGE:'input_change',
// }

type InputState = {
    value: string,
    error: string,
    hasError: boolean,
    name: string,
    isFormValid: boolean,
    active: boolean,
}

// type FormAction = {
//     type: 
//     data:
// }

export type FormState = {
  [key:string] : InputState 
}


const FormReducer = (state: FormState, action) => {

}