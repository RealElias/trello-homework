import { SIGNUP_INIT, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/actionTypes";

const initialState = {
  token: '',
  inProgress: false,
}

const singupReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INIT: {
      return {
        inProgress: true,
      }
    }
    case SIGNUP_SUCCESS: {
      const { token } = action.payload;
      return {
        token: token,
        inProgress: false,
      }
    }
    case SIGNUP_FAILED: {
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

export default singupReducers;