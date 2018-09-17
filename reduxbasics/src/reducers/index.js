import {combineReducers} from 'redux'

import  allFeedbacks from './feedback-reducer'
import allUsers from './users-reducer'
import feedbackClicked from './feedback-clicked-reducer'
import feedbackUpdated from './update-title-reducer';

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers,
    oneFB:feedbackClicked,
    updatedFB:feedbackUpdated

})

export default allReducers