import {configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';


const preloadedState = {
    recentlySolved: [],
  };

const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState
});
  

  export default store;



