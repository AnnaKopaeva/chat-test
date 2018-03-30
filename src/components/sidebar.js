import React, { Component }  from 'react'

import '../sass/sidebar.css'

//images
import User1 from '../images/User1.png'
import User2 from '../images/User2.png'
import User3 from '../images/User3.png'
import User4 from '../images/User4.png'
import User5 from '../images/User5.png'

const users = [
  {
    name: "Liza Opolu",
    img: User1,
  }, {
    name: "Tom Hone",
    img: User2,
  }, {
    name: "Sonya Fermi",
    img: User3,
  }, {
    name: "Alex Donry",
    img: User4,
  }, {
    name: "Mike Oliver",
    img: User5,
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      displayedName: users
    };
  }

  handleChange = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedName = users.filter((user) => {
      let searchValue = user.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({value: event.target.value, displayedName});
  };

  render(){
    let { value, displayedName } = this.state;

    const listUsers = displayedName.map((user, key) =>
      <li className="sidebar__list_item" key={key}>
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