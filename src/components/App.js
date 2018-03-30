import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//actions
import * as addActions from '../actions/addActions';

import Main from './main'
import Sidebar from './sidebar'

import '../sass/reset.css'
import '../sass/global.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-wrapper">
          <Sidebar />
          <Main {...this.props}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(App);
