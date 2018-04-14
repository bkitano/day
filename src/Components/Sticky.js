import React, {Component} from 'react';

class Sticky extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            color: Math.floor(5.*Math.random()),
            length: 9
        }
    }

    didOnChange(e) {
        this.setState({answer: e.target.value});
        console.log(this.state.answer);

        if (this.state.answer.length === (this.state.length - 1) ) {
          console.log('Maximum length has been reached');
          this.didOnSubmit(e);
        }
    }

    didOnSubmit(e) {
        console.log( 'Submitted' );
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
        'fontFamily': 'Helvetica Neue',
          'fontSize': '100px',
          'outline' : 'none',
          'resize' : 'none',
          'overflow' : 'hidden',
          'height' : '500px',
          'textAlign' : 'center',
          'border' : 'none',
          'color' : colors[this.state.color],
          'align':'center'
      };

      var questionStyle = {
          'fontSize':'20px',
          'textAlign':'center'
      }

      return(
        <div className='Sticky' >

            <p style = {questionStyle} >
              {this.props.question}
            </p>

            <textarea
              style = {answerStyle}
              maxLength = {this.state.length}
              onChange = { (e) => this.didOnChange(e) }
              onSubmit = { (e) => this.didOnSubmit(e) }
            />

        </div>
      )
    }

};

export default Sticky;
