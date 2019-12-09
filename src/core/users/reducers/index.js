import ActionType from "../../constants/actionTypes";

const initialState = {
  users: [],
  inProgress: false,
}

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USERS_INIT: {
      return {
        inProgress: true,
      }
    }
    case ActionType.GET_USERS_SUCCESS: {
      const { users } = action.payload;
      return {
        token: users,
        inProgress: false,
      }
    }
    case ActionType.GET_USERS_FAILED: {
      const { error } = action.payload;
      return {
        error: error,
        inProgress: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default usersReducers;