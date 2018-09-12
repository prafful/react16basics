import React from 'react';

import NameComponent from "./childComponent/NameComponent";
import CommentText from './childComponent/CommentText'
import CommentAction from "./childComponent/CommentAction";

class Comment extends React.Component {
    
    render() { 
        return (  <div>
                    <NameComponent name={this.props.name}></NameComponent>
                    <CommentText>{this.props.children}</CommentText>
                    <CommentAction></CommentAction>
                  </div>);
    }
}
 
export default Comment