import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    e.preventDefault();
    console.log(this.refs.search.value);
    this.refs.search.value = '';
  }
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text title-text">Tech Tac Interactive</li>
            <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products</Link></li>
            <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Advantages of Slimline</Link></li>
            <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>FAQ</Link></li>
            <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search by product name" ref="search" /></li>
              <li><input type="submit" className="button" value="Search" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Nav);
