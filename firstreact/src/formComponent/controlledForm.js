import React from 'react';

class ControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            programming:false
         }

         this.handleNameChange = this.handleNameChange.bind(this)
         this.submitForm = this.submitForm.bind(this)
         this.knowProgramming = this.knowProgramming.bind(this)
    }

    handleNameChange(e){
        this.setState({name:e.target.value})
    }

    knowProgramming(e){
        //console.log(e);
        this.setState({programming:e.target.checked})
    }

    submitForm(e){
        e.preventDefault()
        console.log("Submitted")
        console.log(this.state);
    }

    render() { 
        return (
            <div>
                <h3>Controlled Form</h3>
                <form onSubmit={this.submitForm}>
                Name: <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleNameChange}/>
                
                Know Programming: <input 
                        type="checkbox" 
                        value={this.state.programming}
                        onChange={this.knowProgramming}    
                        />
                <button type="Submit">Save</button>
                </form>
            </div>
          );
    }
}
 
export default ControlledForm;