import { createSlice } from '@reduxjs/toolkit'
import { authenticate, changeAvatar, getUserProfile, userLogout } from '../api/userApi';

const initialUser = {
    name:"",
    email:"",
    avatar:"",
    tokens:[],
    coinBalance:0,
    auth:false
}

const userSlice = createSlice({
    name:"user",
    initialState:initialUser,
    reducers:{
        login:(state) => {
            state.auth = true;
            //console.log("state:",state);
        },
        addToken:(state,action) => {
          const token = action.payload;
          state.tokens.push(token);
      }
    },
    extraReducers:(builder) => {
        builder.addCase(authenticate.pending, (state, action) => {
            state.auth = false;
          })
          .addCase(authenticate.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
          })
          .addCase(authenticate.rejected, (state, action) => {
            state.auth = false;
          });

          builder.addCase(userLogout.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
          });

          builder.addCase(getUserProfile.fulfilled, (state,action) => {
            const { data,authenticate } = action.payload;
            return {...state,...data,auth:authenticate}
          });

          builder.addCase(changeAvatar.fulfilled, (state,action) => {
            const { avatar,authenticate } = action.payload;
            console.log(action.payload);
            if(avatar && authenticate) return {...state,avatar:avatar,auth:authenticate}
          })
      }
});

export const { login,addToken } = userSlice.actions;

export default userSlice.reducer;