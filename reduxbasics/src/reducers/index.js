import {combineReducers} from 'redux'

import  allFeedbacks from './feedback-reducer'
import allUsers from './users-reducer'

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers
})

export default allReducers