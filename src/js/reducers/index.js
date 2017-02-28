import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer } from 'redux-react-firebase'
export default combineReducers({
    routing,
    firebase: firebaseStateReducer
})
