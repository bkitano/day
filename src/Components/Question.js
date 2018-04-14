import React, {Component} from 'react';

class Question extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            color : Math.floor(5.*Math.random())
        }
    }
    
    changeText(e) {
        this.setState({answer: e.target.value});
        console.log(this.state.answer);
    }
    
    render() {
        
        /*
        var colors = {
            'red' : '#ed1c24',
            'light-blue' : '#00a9ff',
            'blue' : '#004fff',
            'green' : '#3dc100',
            'yellow' : '#fffc21'
        }
        */
        var colors = ['#ed1c24', '#00a9ff', '#004fff', '#3dc100', '#fffc21'];
        

        var answerStyle = {
        	'font-family': 'Helvetica Neue',
            'font-size': '100px',
            'outline' : 'none',
            'resize' : 'none',
            'overflow' : 'hidden',
            'height' : '500px',
            'text-align' : 'center',
            'border' : 'none',
            'color' : colors[this.state.color],
            'align':'center'
        };
        
        var questionStyle = {
            'font-size':'20px',
            'text-align':'center'
        }
        
        return (
            <div className='question-container' >
                <p style={questionStyle}>{this.props.question}</p>
                <textarea style={answerStyle} maxlength={this.props.length} onChange={(e) => this.changeText(e)}/>
            </div>
        );
    }
    
}

export default Question;