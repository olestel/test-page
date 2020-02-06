import { createStore } from 'redux'

import ourReducer from './reducers';

const store = createStore(ourReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;