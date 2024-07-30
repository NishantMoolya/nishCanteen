import { createSlice } from '@reduxjs/toolkit'

const initialToast = { 
    message:'user feedback',
    type:'success',
    onClose:() => {},
    duration:3000,
    openToast:false
};

const toastSlice = createSlice({
    name:"toast",
    initialState:initialToast,
    reducers:{
        closeToast:(state) => {
            return {...state,openToast:false};
        },
        showToast:(state,action) => {
            const { message,type } = action.payload;
            return {...state,message:message,type:type,openToast:true};
        }
    }
});

export const { showToast,closeToast } = toastSlice.actions;

export default toastSlice.reducer;