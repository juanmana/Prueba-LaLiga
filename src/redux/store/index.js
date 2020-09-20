import {applyMiddleware, createStore} from 'redux'
import reduxSaga, { runSaga } from 'redux-saga'
import rootSaga from '../sagas'


function reducers(){


    return {

        testing: ''
    }
}



const sagaMiddleware = reduxSaga()
export default ()=>{


    return{


        ...createStore(reducers, applyMiddleware(sagaMiddleware)),

        runSaga: sagaMiddleware.run(rootSaga)
    }
}

