import React from 'react';



class Name extends React.Component {

    render() { 
        
    let nameColor = {
        color:this.props.fcolor,
        backgroundColor: this.props.bcolor,
        float:"left",
        padding:"5px",
        margin:"2px",
        border:"2px solid red",
        borderRadius:"5px"  
    }
    

        return ( <div style={nameColor}>
                    {this.props.children}
                </div> );
    }
}
 
export default Name;