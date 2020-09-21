import * as constants from "./constants";

export const set = (first_name,last_name,avatar) => ({
    type: constants.SET,
    payload: {
        first_name:first_name,
        last_name:last_name,
    },
});
export const failure = (isFail,msg) => ({
    type: constants.FAILURE,
    payload: {
        failure : isFail,
        message :msg
    },
});
export const loading = (isLoading) => ({
    type: constants.LOADING,
    payload: {
        loading: isLoading,
    },
});