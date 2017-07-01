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
      <div className="top-bar blueMainBg">
        <div className="top-bar-left blueMainBg">
          <ul className="menu blueMainBg" style={{color: '#fff'}}>
            <li className="menu-text title-text blueMainBg">Tech Tac Interactive</li>
            <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'white'}}><span style={{color: 'white'}}>Products</span></Link></li>
            <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: 'white'}}>FAQ</span></Link></li>
            <li className="blueMainBg"><Link className="blueMainBg2" to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: 'white'}}>Contact</span></Link></li>
          </ul>
        </div>
        <div className="top-bar-right blueMainBg">
          <form onSubmit={this.onSearch}>
            <ul className="menu top-bar-left">
              <li className="blueMainBg"><input className="small radius" type="search" placeholder="Search products" ref="search" /></li>
              {/* <li className="blueMainBg"><input type="submit" className="button" value="Search" style={{backgroundColor: '#fff'}} /></li> */}
              <li className="blueMainBg"><button className="button small radius" value="Submit" style={{backgroundColor: '#fff', color: '#00457c', fontWeight: 'bold'}}>Search</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Nav);
