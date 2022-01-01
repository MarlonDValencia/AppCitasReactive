import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";
const composeEnhacer =  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunk))
);

export default store