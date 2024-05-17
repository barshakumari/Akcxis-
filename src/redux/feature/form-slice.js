import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    visaType: "",
    consultationType: "",
    language: "",
    message: ""
}

const formSlice = createSlice({
    name: "form-slice",
    initialState,
    reducers: {
        setInputField: (_, action) => {
            return {
                firstName: action.payload.firsName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                country: action.payload.country,
                city: action.payload.city,
                visaType: action.payload.visaType,
                consultationType: action.payload.consultationType,
                language: action.payload.language,
                message: action.payload.message
            }
        },
        resetInputField: (_, action) => {
            return initialState
        }
    }
})

export const { setInputField, resetInputField } = formSlice.actions
export default formSlice.reducer