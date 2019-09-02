# Quickstart
minimal example for the react native with redux-persist
> npm install
> react-native link


# Usage
Redux persist allowing to save the redux store in the local storage.

```markdown
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ['counterReducer']
}

const combineReducer = combineReducers({
  userReducer: userReducer,
  counterReducer: counterReducer
})

const pReducer = persistReducer(persistConfig, combineReducer)
const store = createStore(pReducer)
```

If you are using react, wrap your root component with PersistGate. This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. NOTE the PersistGate loading prop can be null, or any react instance, e.g. loading={<Loading />}

```markdown
import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={pStore}>
          <AppNavigator />
        </PersistGate>
      </Provider>
  );
};
```
### Important functions

#### persistReducer(config, reducer)
  - arguments
    - **config** *object*
      - required config: **key, storage**
      - notable other config: **whitelist, blacklist, version, stateReconciler, debug**
    - **reducer** *function*
      - any reducer will work, typically this would be the top level reducer returned by **combineReducers**
  - returns an enhanced reducer

#### persistStore(store, [config, callback])
  - arguments
    - **store** *redux store* The store to be persisted.
    - **config** *object* (typically null)
      - If you want to avoid that the persistence starts immediatly after calling **persistStore**, set the option manualPersist. Example: **{ manualPersist: true }** Persistence can than be started at any point with **peristor.persist()**. You usually want to do this, if your storage is not ready when the **persisStore** call is made.
    - **callback** *function* will be called after rehydration is finished.
  - returns **persistor** object

### State Reconciler
State reconcilers define how incoming state is merged in with initial state. It is critical to choose the right state reconciler for your state. 

1. **hardSet** (**import hardSet from 'redux-persist/lib/stateReconciler/hardSet**)
This will hard set incoming state. This can be desirable in some cases where persistReducer is nested deeper in your reducer tree, or if you do not rely on initialState in your reducer.
   - **incoming state**: **{ foo: incomingFoo }**
   - **initial state**: **{ foo: initialFoo, bar: initialBar }**
   - **reconciled state**: **{ foo: incomingFoo }** // note bar has been dropped
2. **autoMergeLevel1** (default)
This will auto merge one level deep. Auto merge means if the some piece of substate was modified by your reducer during the REHYDRATE action, it will skip this piece of state. Level 1 means it will shallow merge 1 level deep.
   - **incoming state**: **{ foo: incomingFoo }**
   - **initial state**: **{ foo: initialFoo, bar: initialBar }**
   - **reconciled state**: **{ foo: incomingFoo, bar: initialBar }** // note incomingFoo overwrites initialFoo
3. **autoMergeLevel2** (**import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2**)
This acts just like autoMergeLevel1, except it shallow merges two levels
   - **incoming state**: **{ foo: incomingFoo }**
   - **initial state**: **{ foo: initialFoo, bar: initialBar }**
   - **reconciled state**: **{ foo: mergedFoo, bar: initialBar }** // note: initialFoo and incomingFoo are shallow merged

### Blacklist & Whitelist
```markdown
// BLACKLIST
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['counterReducer'] // counterReducer will not be persisted
};
 
// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['counterReducer'] // only counterReducer will be persisted
};
```

## Refrence Links
- <https://www.npmjs.com/package/redux-persist>
- <https://github.com/rt2zz/redux-persist/tree/fdb1dc37e071159fcbd8dc6b4088de0b8629d7da>