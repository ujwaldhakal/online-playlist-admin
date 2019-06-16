import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// const devTools =
// process.env.NODE_ENV === "development"
// ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// : 1;

export default function configureStore()  {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk),
        // compose(
        // devTools
        // )
    );
    return store;
}
