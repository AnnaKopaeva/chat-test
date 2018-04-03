import React, { Component }  from 'react';
import randomSentence from 'random-sentence';

import '../sass/main.css'
import Send from '../images/send-button.png'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  };

  componentDidMount(){
    this.nameInput.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  clickButton = () => {
    let { actions: { addMessage, addBotMessage, changeDialog }, state: { dialogs, activeDialog } } = this.props;
    let { value } = this.state;

    addMessage(value);
    changeDialog(dialogs, activeDialog);

    setTimeout(function(){
      addBotMessage(randomSentence({min: 2, max: 5}));
      changeDialog(dialogs, activeDialog);
    }, 1000);

    this.setState({value: ''});
  };

  handleKeyPress = (e) =>  {
    let { value } = this.state;
    if (value && e.key === 'Enter') {
      this.clickButton();
    }
  };

  render(){
    let { value } = this.state;
    let { state: { userDialog } } = this.props;

    let listMessages = userDialog.map((message, key) =>
      <li
        key={key}
        className={message.is_owner ? "message-list__item message_list__item--owner" : "message-list__item"}>
        <p className="message-list__text">{message.text}</p>
      </li>
    );

    return(
      <div className="main">
        <ul className="message_list">
          {listMessages}
        </ul>
        <div className="send">
          <input
            type="text"
            className="send__text"
            value={value}
            ref={(input) => { this.nameInput = input; }}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Click here to write something..."
          />
          <button
            className={!value ? "send__button send__button--disabled" : "send__button"}
            disabled={!value}
            onClick={this.clickButton}>
            <img src={Send} alt="send" className="send__icon"/>
          </button>
        </div>
      </div>
    )
  }
}

export default Main;
