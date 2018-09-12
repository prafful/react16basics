import React from 'react';

class ControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:"",
            programming:false
         }

         //this.handleNameChange = this.handleNameChange.bind(this)
         this.submitForm = this.submitForm.bind(this)
         this.knowProgramming = this.knowProgramming.bind(this)
         this.captureChange = this.captureChange.bind(this)
    }

   /*  handleNameChange(e){
        this.setState({name:e.target.value})
    }*/

    knowProgramming(e){
        //console.log(e);
        this.setState({programming:e.target.checked})
    } 

    captureChange(e){
        this.setState({[e.target.name]:e.target.value})
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
                        name="name"
                        value={this.state.name} 
                        onChange={this.captureChange}/>
                
                Email: <input 
                        type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.captureChange}/>
                
                Know Programming: <input 
                        type="checkbox" 
                        name="programming"
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