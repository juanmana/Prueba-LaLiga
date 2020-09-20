

import {put, call, takeLatest} from 'redux-saga/effects'
import {START_GET_USERS, SUCCESS_GET_USERS} from '../actions/users'
import {apiCall} from '../utils'

 function* getUsers({payload}){



    try {
        
      const result = yield call(apiCall, 'get', 'https://reqres.in/api/users')

      console.log(result)
     yield put({type: SUCCESS_GET_USERS,result})

    } catch (err) {
        
    }
}

//Watchers
export default function* users(){

    yield takeLatest(START_GET_USERS ,getUsers);
}