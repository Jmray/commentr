import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer, repoReducer } from './reducers';

const rootReducer = combineReducers({
    userReducer,
    repoReducer
})


export const store = createStore(rootReducer, composeWithDevTools());




