import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import rootSaga from '../sagas/index';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && 
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
);
    
sagaMiddleware.run(rootSaga);

export { store };