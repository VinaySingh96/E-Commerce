/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import Index from './src/Containers/Index';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './src/Services/Reducers/index';
const store=createStore(rootReducer);

// console.log(store)
const App = () => {
  return (
    <Provider store={store}>

      <Index />
    </Provider>
  )
}



export default App;