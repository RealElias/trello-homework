import ActionType from "../../constants/actionTypes";

const initialState = {
  boards: [],
  inProgress: false,
}

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_BOARDS_INIT: {
      return {
        inProgress: true,
      }
    }
    case ActionType.GET_BOARDS_SUCCESS: {
      const { boards } = action.payload;
      return {
        boards,
        inProgress: false,
      }
    }
    case ActionType.GET_BOARDS_FAILED: {
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