import React from 'react';

class CommentText extends React.Component {
    state = {  }
    render() { 
        return (  <div>
                    {this.props.children}
                    </div>
                );
    }
}
 
export default CommentText;