import { put, takeEvery,call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as service from "../../services";
import {store} from "../../store";
import {push} from "react-router-redux";
import * as userListActions from "../home/actions";



function* addData(action) {
    const {first_name,last_name} = action.payload;
    try {
        yield put(actions.loading( true));

        yield call(service.makePatchReq,{url:`/users`,data:{first_name,last_name}});

        const state = store.getState();
        const getUserList = state.usersList.data;

        const newID = Date.now();
        const newUser = { id :newID,first_name,last_name};
        getUserList.unshift(newUser);
        yield put(userListActions.set(getUserList));
        store.dispatch(push("/"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
        alert(error.response.data.error)
    }finally {
        yield put(actions.loading( false));
    }
}

export function* addDataSaga() {
    yield takeEvery(constants.SET, addData);
}
export default [addDataSaga()];