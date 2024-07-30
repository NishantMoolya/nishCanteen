import { createSlice } from '@reduxjs/toolkit'
import { authenticate, changeAvatar, getUserProfile, purchaseCoins, userLogout } from '../api/userApi';

const initialUser = {
    name:"",
    email:"",
    avatar:"",
    tokens:[],
    coinBalance:0,
    role:'user',
    type:'outsider',
    auth:false
}

const userSlice = createSlice({
    name:"user",
    initialState:initialUser,
    reducers:{
        login:(state) => {
            state.auth = true;
        },
        addToken:(state,action) => {
          const token = action.payload;
          state.tokens.push(token);
      },
      updateCoinBalance:(state,action) => {
        const amount = action.payload;
        state.coinBalance += amount;
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
            state = {...initialUser,auth:action.payload.authenticate};
            return state;
          });

          builder.addCase(getUserProfile.fulfilled, (state,action) => {
            const { authenticate } = action.payload;
            if (authenticate) {
              const { data } = action.payload;
              return {...state,...data,auth:authenticate}
            }else return {...state,auth:authenticate}
          });

          builder.addCase(changeAvatar.fulfilled, (state,action) => {
            const { avatar,authenticate } = action.payload;
            console.log(action.payload);
            if(avatar && authenticate) return {...state,avatar:avatar,auth:authenticate}
          });

          builder.addCase(purchaseCoins.fulfilled, (state,action) => {
            const { coinBalance } = action.payload.data;
            console.log(coinBalance);
            if(coinBalance) return {...state,coinBalance:state.coinBalance+coinBalance}
          })
      }
});

export const { login,addToken,updateCoinBalance } = userSlice.actions;

export default userSlice.reducer;