export const START_GET_USERS = "START_GET_USERS";

export const SUCCESS_GET_USERS = "SUCCESS_GET_USERS";

 export const startGetUsers = (payload)=>({
  type: START_GET_USERS,
  ...payload,
});

const succesGetUsers = (payload) => ({
  type: SUCCESS_GET_USERS,
  ...payload,
});


