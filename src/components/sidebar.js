import React, { Component }  from 'react'

import '../sass/sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    if (this.props.state) {
      var { state: { userList } } = this.props;
    }

    this.state = {
      value: '',
      displayedName: userList,
    };
  }

  handleChange = (event) => {
    let { state: { userList } } = this.props;

    let searchQuery = event.target.value.toLowerCase();
    let displayedName = userList.filter((user) => {
      let searchValue = user.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({value: event.target.value, displayedName});
  };

  clickListItem = (key) => {
    let { state: { userList, dialogs }, actions: { changeActiveUser, changeUser, changeDialog } } = this.props;
    changeActiveUser(key);
    changeUser(userList, key);
    changeDialog(dialogs, key);
  };

  render(){
    let { value, displayedName } = this.state;
    let { activeDialog } = this.props.state;

    const listUsers = displayedName.map((user, key) =>
      <li
        className={activeDialog === key ? 'sidebar__list_item sidebar__list_item--active' : 'sidebar__list_item'}
        key={key}
        onClick={() => this.clickListItem(key)}>
        <img src={user.img} className="sidebar__list_img" alt="user avatar"/>
        <span className="sidebar__list_name">{user.name}</span>
      </li>
    );

    return(
      <div className="sidebar">
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          className="sidebar__search"
          placeholder="&#128269; Search"
        />
        <ul className="sidebar__list">
          {listUsers}
        </ul>
      </div>
    )
  }
}

export default Sidebar;