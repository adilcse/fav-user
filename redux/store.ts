import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import loginReducer from './reducers/loginReducer';

const store = configureStore({
    reducer: {
      login: loginReducer,
    },
  });
  
  export const useAppDispatch = () => useDispatch();
export default store;