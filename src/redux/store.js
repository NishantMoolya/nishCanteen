import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';
import placeReducer from './reducers/placeReducer';
import dishReducer from './reducers/dishReducer';

const store =  configureStore({
  reducer: {
    user:userReducer,
    dish:dishReducer
  },
});

export default store;