import React, {Component} from 'react';

import Question from './Question';

class AppContainer extends Component {
    
    render() {
        
        return (
            
            <div className='AppContainer'>
                <Question question='Why are you here?' length='40' />
            </div>
            
            )
    }
}

export default AppContainer;