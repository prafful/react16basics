import {combineReducers} from 'redux'

import  allFeedbacks from './feedback-reducer'
import allUsers from './users-reducer'
import feedbackClicked from './feedback-clicked-reducer'

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers,
    oneFB:feedbackClicked

})

export default allReducers