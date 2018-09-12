import React from 'react';



class FormComponent extends React.Component {

    constructor(){
        super()
        this.playWithSubmit = this.playWithSubmit.bind(this)
    }


    playWithSubmit(e){
        e.preventDefault()
        console.log(e);
        console.log(this.input.value);
    }

   
    
    render() { 
        return ( <div>
            <form onSubmit={this.playWithSubmit}>
                Name: <input type="text" ref={(meme)=> this.input = meme  }/>
                      <input type="submit" />
            </form>

            
        </div> )
    }
}
 
export default FormComponent;

