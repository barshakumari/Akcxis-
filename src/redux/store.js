import { useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./feature/form-slice";

export const store = configureStore({
    reducer: { formSlice }
})

export const useForm = useSelector