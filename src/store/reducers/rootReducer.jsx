import authReducer from './authReducer'
import commentReducer from './commentReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer