import { createStore,applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { all } from "redux-saga/effects";
import history from "./history/history";




const rootSaga = function*() {
    yield all([
    
    ]);
  };




  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();







  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware,
        
          routerMiddleware(history)
      )
    )
  );
  sagaMiddleware.run(rootSaga);
  export { store };