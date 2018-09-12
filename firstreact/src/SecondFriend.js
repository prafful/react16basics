import React from 'react';

class SecondFriend extends React.Component{
    render(){
        return(
            <div>
                <h1>Friend: {this.props.children} is {this.props.profession}</h1>
            </div>
        )
    }
}

export default SecondFriend;