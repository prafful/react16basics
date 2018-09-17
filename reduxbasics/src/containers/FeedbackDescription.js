import React from 'react';
import {connect} from 'react-redux'


class FeedbackDescription extends React.Component {

    render() {
        if(this.props.selectedFBprops== null){
            return(
                <div>
                    Click on any title!!!!
                </div>
            )
        }

        return ( 
            <div>
                <ul>
                    <li>Feedback Description will come here</li>
                    <li>{this.props.selectedFBprops.description}</li>

                </ul>
            </div>
        );
    }
}
 
function connectStateToComponentAsProps(state){
    return ({
        selectedFBprops:state.oneFB
    })
}

export default connect(connectStateToComponentAsProps)(FeedbackDescription)