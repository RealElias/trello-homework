import ActionType from "../../constants/actionTypes";

const initialState = {
  boards: [],
  showEditor: false,
  inProgress: false,
}

const boardsReducers = (state = initialState, action) => {
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
    case ActionType.GET_BOARD_INIT: {
      return {
        inProgress: true,
      }
    }
    case ActionType.GET_BOARD_SUCCESS: {
      const { board } = action.payload
      return {
        board,
        inProgress: false,
      }
    }
    case ActionType.GET_BOARD_FAILED: {
      const { error } = action.payload;
      return {
        error: error,
        inProgress: false,
      }
    }
    case ActionType.OPEN_BOARD_EDITOR: {
      return {
        showEditor: true,
      }
    }
    case ActionType.CLOSE_BOARD_EDITOR: {
      return {
        showEditor: false,
      }
    }
    case ActionType.SAVE_BOARD_INIT: {
      return {
        showEditor: true,
        inProgress: true,
      }
    }
    case ActionType.SAVE_BOARD_SUCCESS: {
      const { board } = action.payload;
      console.log(board);
      return {
        board,
        inProgress: false,
      }
    }
    case ActionType.SAVE_BOARD_FAILED: {
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

export default boardsReducers;