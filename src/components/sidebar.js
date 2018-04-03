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
      open: false,
      displayedName: userList,
    };
  }

  updateDimensions = () => {
    if(window.innerWidth > 750) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleChange = (event) => {
    let { state: { userList } } = this.props;

    let searchQuery = event.target.value.toLowerCase();

    let displayedName = userList.filter((user) => {
      let searchValue = user.name.toLowerCase();
      if (searchValue.startsWith(searchQuery)) {
        return -1;
      }
    });

    this.setState({value: event.target.value, displayedName});
  };

  clickListItem = (key) => {
    let { state: { userList, dialogs }, actions: { changeActiveUser, changeUser, changeDialog } } = this.props;
    changeActiveUser(key);
    changeUser(userList, key);
    changeDialog(dialogs, key);
  };

  toggleButton = () => {
    this.setState({open: !this.state.open})
  }

  render(){
    let { value, displayedName, open } = this.state;
    let { activeDialog } = this.props.state;

    const listUsers = displayedName.map((user, key) =>
      <li
        className={activeDialog === key ? 'sidebar__list_item sidebar__list_item--active' : 'sidebar__list_item'}
        key={key}
        onClick={() => this.clickListItem(user.id)}>
        <img src={user.img} className="sidebar__list_img" alt="user avatar"/>
        <span className="sidebar__list_name">{user.name}</span>
      </li>
    );

    return(
      <div
        className={open ? "sidebar" : "sidebar sidebar--close"}>
        <div
          className={open ? "toggle_menu toggle_menu--open" : "toggle_menu"}
          onClick={this.toggleButton}>
          <span className="toggle_menu__span"></span>
          <span className="toggle_menu__span"></span>
          <span className="toggle_menu__span"></span>
          <span className="toggle_menu__span"></span>
        </div>
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
