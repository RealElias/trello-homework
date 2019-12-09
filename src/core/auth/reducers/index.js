import ActionType from "../../constants/actionTypes";

const initialState = {
  token: '',
  inProgress: false,
}

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGNIN_INIT: {
      return {
        inProgress: true,
      }
    }
    case ActionType.SIGNIN_SUCCESS: {
      const { token } = action.payload;
      return {
        token: token,
        inProgress: false,
      }
    }
    case ActionType.SIGNIN_FAILED: {
      const { error } = action.payload;
      return {
        error: error,
        inProgress: false,
      }
    }
    case ActionType.SIGNUP_INIT: {
      return {
        inProgress: true,
      }
    }
    case ActionType.SIGNUP_SUCCESS: {
      const { token } = action.payload;
      return {
        token: token,
        inProgress: false,
      }
    }
    case ActionType.SIGNUP_FAILED: {
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

export default authReducers;