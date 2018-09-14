import React from 'react';

class DisplayUser extends React.Component {
    
    render() { 
        return ( 
                    <tr>
                        <td><img src={this.props.avatarUrl} /></td>
                        <td>{this.props.id}</td> 
                        <td>{this.props.vote}</td> 
                        <td>{this.props.title}</td>
                        <td>{this.props.description}</td>
                        
                    </tr> 
                 );
    }
}
 
export default DisplayUser;