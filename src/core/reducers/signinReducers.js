import { SIGNIN_INIT, SIGNIN_SUCCESS, SIGNIN_FAILED } from "../actions/actionTypes";

const initialState = {
  token: '',
  inProgress: false,
}

const singinReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_INIT: {
      return {
        inProgress: true,
      }
    }
    case SIGNIN_SUCCESS: {
      const { token } = action.payload;
      return {
        token: token,
        inProgress: false,
      }
    }
    case SIGNIN_FAILED: {
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

export default singinReducers;