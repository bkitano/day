import React, {Component} from 'react';

import Sticky from './Sticky';

class AppContainer extends Component {

    render() {

        return (

            <div className='AppContainer'>
                <Sticky
                  question = 'Why are you here?'
                  />
            </div>

            )
    }
}

export default AppContainer;
