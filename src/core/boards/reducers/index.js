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
        ...state,
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
        ...state,
      }
    }
    case ActionType.GET_BOARD_INIT: {
      return {
        inProgress: true,
        ...state,
      }
    }
    case ActionType.GET_BOARD_SUCCESS: {
      const { board } = action.payload
      return {
        board,
        inProgress: false,
        ...state,
      }
    }
    case ActionType.GET_BOARD_FAILED: {
      const { error } = action.payload;
      return {
        error: error,
        inProgress: false,
        ...state,
      }
    }
    case ActionType.OPEN_BOARD_EDITOR: {
      return {
        showEditor: true,
        ...state,
      }
    }
    case ActionType.CLOSE_BOARD_EDITOR: {
      return {
        ...state,
        showEditor: false,
      }
    }
    case ActionType.SAVE_BOARD_INIT: {
      return {
        ...state,
        showEditor: true,
        inProgress: true,
      }
    }
    case ActionType.SAVE_BOARD_SUCCESS: {
      const { board } = action.payload;
      let boards = state.boards;
      boards[indexById(boards, board)] = board; 
      return {
        boards,
        showEditor: false,
        inProgress: false,
      }
    }
    case ActionType.SAVE_BOARD_FAILED: {
      const { error } = action.payload;
      return {
        error: error,
        inProgress: false,
        ...state,
      }
    }
    default: {
      return state;
    }
  }
}

function indexById(boards, board) {
  for (let i = 0; i < boards.length; i++) {
    if(boards[i]._id === board._id) return i
  }
  return boards.length;
}

export default boardsReducers;