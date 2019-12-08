import { combineReducers } from "redux"
import signinReduces from '../auth/reducers'
import signupReduces from '../signup/reducers'

export default combineReducers({
    signinReduces,
    signupReduces
});