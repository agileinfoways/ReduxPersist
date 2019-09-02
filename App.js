/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './app/component/RootComponent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { userReducer } from './app/redux/reducer/UserReducer';
import { counterReducer } from './app/redux/reducer/CounterReducer';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';


/**
 * key: this value will define what will be the key that we will use 
 *     as identifier to save the persisted information.Once created must be the same always 
 *     (if you change the name after there was a persistence, redux-persist won’t find any 
 *     information and it will load the default values)
 * storage: The engine we will use for persistence.
 * blacklist: list of reducers names that will be ignored when the persistence will be done
 * whitelist: list of reducers names that will be used when the persistence will be done. Other reducers will be ignored
 * stateReconciler: the way that the information will be merged when its being rehydrated.
*/
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['counterReducer'] // counterReducer will not be persisted
}

const authPersistConfig = {
  key: 'userReducer',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['token']
};

const combineReducer = combineReducers({
  // userReducer: persistReducer(authPersistConfig, userReducer),
  userReducer: userReducer,
  counterReducer: counterReducer
})

/**
 * persistReducer: will be used in our rootReducer to define it as something we want to persist.
 * It is possible to go inside the rootReducer and use persistReducer in some and leave others 
 * without persistence, but in this blog we will persist all the rootReducer
 */
const pReducer = persistReducer(persistConfig, combineReducer)
const store = createStore(pReducer)

/**
 * persistStore: will be used in the store, after being created, and it will define that
 * the store will use Redux-Persist
 */
const pStore = persistStore(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={pStore}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}