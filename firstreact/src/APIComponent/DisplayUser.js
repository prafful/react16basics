import React from 'react';

class DisplayUser extends React.Component {
    
    render() { 
        return ( <div>
            {this.props.id}, {this.props.name}, {this.props.email}
        </div> );
    }
}
 
export default DisplayUser;