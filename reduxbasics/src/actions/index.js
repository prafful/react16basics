const selectFeedback = function(feedback){
   console.log(feedback.id)
   return {
       type:"FEEDBACK_CLICKED",
       payload:feedback
   }

}

export default selectFeedback