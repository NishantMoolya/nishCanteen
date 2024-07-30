import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';
import placeReducer from './reducers/placeReducer';
import dishReducer from './reducers/dishReducer';
import toastReducer from './reducers/toastReducer';

const store =  configureStore({
  reducer: {
    user:userReducer,
    dish:dishReducer,
    toast:toastReducer
  },
});

export default store;