const updateTitle = function(updatedfeedback){
    console.log(updatedfeedback.title)
    return {
        type:"TITLE_UPDATED",
        payload:updatedfeedback
    }
 
 }
 
 export default updateTitle