import { combineReducers } from "redux"

import authReducers from '../auth/reducers'
import usersReducers from '../users/reducers'
import boardsReducers from '../boards/reducers'

export default combineReducers({
    auth: authReducers,
    users: usersReducers,
    boards: boardsReducers,
});