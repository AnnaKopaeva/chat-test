import React, { Component }  from 'react';

import '../sass/main.css'
import Send from '../images/send-button.png'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messages: [],
    };
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  clickButton = () => {
    let { actions: { addMessage } } = this.props;
    let { value } = this.state;
    // addMessage(value)
    console.log(this.props.state.message)
  };

  render(){
    let { value, messages } = this.state;
    let { state: { userInfo } } = this.props;

    let listMessages = messages.map((message) =>
      <li>{message}</li>
    );
    console.log(userInfo)

    return(
      <div className="main">
        <ul className="message-list">
          {listMessages}
        </ul>
        <div className="send">
          <input
            type="text"
            className="send__text"
            value={value}
            onChange={this.handleChange}
            placeholder="Click here to write something..."
          />
          <button
            className="send__button"
            onClick={this.clickButton}>
            <img src={Send} alt="send" className="send__icon"/>
          </button>
        </div>
      </div>
    )
  }
}

export default Main;