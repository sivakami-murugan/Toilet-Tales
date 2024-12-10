// Correct import:
import { thunk } from "redux-thunk";
import rootReducer from "../redux/RootReducer";

// Middleware setup:
import { createStore, applyMiddleware } from "redux";
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
