import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

import SideNav from 'SideNav';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onClick = this.onClick.bind(this);
    this.renderSideNav = this.renderSideNav.bind(this);
    this.state = {
      toggleNav: true
    };
  }
  renderSideNav() {
    if (this.state.toggleNav) {
      return (
        <div id="page-wrap">
          <SideNav />
        </div>
      );
    }
  }
  onClick() {
    if (this.state.toggleNav) {
      this.setState({
        toggleNav: false
      })
    } else {
      this.setState({
        toggleNav: true
      });
    }
  }
  onSearch(e) {
    e.preventDefault();
    console.log(this.refs.search.value);
    this.refs.search.value = '';
  }
  render () {
    return (
      <div className="blueMainBg">
        <div className="top-bar blueMainBg" style={{position: 'fixed', zIndex: '101', width: '100%', top: '0'}}>
          <div className="top-bar-left blueMainBg" style={{cursor: 'pointer'}} onClick={this.onClick}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </div>
          <div className="top-bar-left blueMainBg">
            <ul className="menu blueMainBg" style={{color: '#fff'}}>
              <li className="menu-text title-text blueMainBg">Tech Tac Interactive</li>
              {/* <li className="blueMainBg"><button className="button" onClick={this.onClick}>Dropdown</button></li> */}
              <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'white'}}><span style={{color: 'white'}}>Products</span></Link></li>
              <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: 'white'}}>FAQ</span></Link></li>
              <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: 'white'}}>Contact</span></Link></li>
            </ul>
          </div>
          <div className="top-bar-right blueMainBg">
            <form className="blueMainBg" onSubmit={this.onSearch}>
              <ul className="menu top-bar-left blueMainBg">
                <li className="blueMainBg"><input className="small radius" type="search" placeholder="Search products" ref="search" /></li>
                {/* <li className="blueMainBg"><input type="submit" className="button" value="Search" style={{backgroundColor: '#fff'}} /></li> */}
                <li className="blueMainBg"><button className="button small radius" value="Submit" style={{backgroundColor: '#fff', color: '#00457c', fontWeight: 'bold'}}>Search</button></li>
              </ul>
            </form>
          </div>
        </div>
        {this.renderSideNav()}
      </div>
    );
  }
}

export default connect()(Nav);
