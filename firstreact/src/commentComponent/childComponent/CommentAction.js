import React from 'react';

class CommentAction extends React.Component {

    constructor(){
        super()
        this.state = {
            like:0,
            unlike:0
        }

        this.unlikeMe = this.unlikeMe.bind(this)
        this.likeMe = this.likeMe.bind(this)
    }

    likeMe=function(){
        console.log("Liked")
        //this.state.like = this.state.like + 1;
        this.setState({
            like:this.state.like+1
        })
    }

    unlikeMe(){
        console.log("unliked")
        this.setState({
            unlike:this.state.unlike+1
        })
    }
   
    render() { 
        return (  <div>
                <button onClick={this.likeMe}>Likes {this.state.like}</button>
                <button onClick={this.unlikeMe}>UnLikes {this.state.unlike}</button>
        </div>);
    }
}
 
export default CommentAction;