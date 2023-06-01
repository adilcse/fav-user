import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
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
  middleware: [logger]
});

export const persistor = persistStore(store);
export default store;
