import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import favUserReducer from './reducers/favUserReducer';
import loginReducer from './reducers/loginReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login', 'favorite'],
  };

  const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedFavReducer = persistReducer(persistConfig, favUserReducer);

const store = configureStore({
    reducer: {
      login: persistedLoginReducer,
      favorite: persistedFavReducer
    },
  });
  
  export const useAppDispatch = () => useDispatch();
  export const persistor = persistStore(store);
export default store;