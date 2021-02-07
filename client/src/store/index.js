import authreducer from "./reducers/auth";
import rtReducer from "./reducers/root";
import dashboardreducer from "./reducers/dashboard";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const configureStore = () => {
  const composeEnhances =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
    auth: authreducer,
    root: rtReducer,
    dashboard: dashboardreducer,
  });
  const store = createStore(
    rootReducer,
    composeEnhances(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
