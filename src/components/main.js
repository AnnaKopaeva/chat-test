import React, { Component }  from 'react';

import '../sass/main.css'
import Send from '../images/send-button.png'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  clickButton = () => {
    let { actions: { addMessage, changeDialog }, state: { dialogs, activeDialog } } = this.props;
    let { value } = this.state;

    addMessage(value);
    changeDialog(dialogs, activeDialog);
    this.setState({value: ''});
    console.log(this.props.state)
  };

  render(){
    let { value } = this.state;
    let { state: { userDialog } } = this.props;

    let listMessages = userDialog.map((message, key) =>
      <li
        key={key}
        className={message.is_owner ? "message-list__item message_list__item--owner" : "message-list__item"}
      >{message.text}</li>
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