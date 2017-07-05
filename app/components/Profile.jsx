import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import Nav from 'Nav';
import SideNav from 'SideNav';

class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.onSignup = this.onSignup.bind(this);

  }
  onSignup (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var email = this.refs.email.value;
    var companyName = this.refs.companyName.value;
    var phone = this.refs.phone.value;
    var url = this.refs.url.value;
    var contactName = this.refs.contactName.value;
    var addressLine1 = this.refs.addressLine1.value;
    var addressLine2 = this.refs.addressLine2.value;
    var city = this.refs.city.value;
    var state = this.refs.state.value;
    var zip = this.refs.zip.value;
    var country = "USA";

    var newUser = {
      email,
      companyName,
      phone,
      url,
      contactName,
      address: {
        addressLine1,
        addressLine2,
        city,
        state,
        zip,
        country
      }
    };

    var user = {
      address: {

      }
    };
    if (password.length > 1) {
      user.password = password;
    }

    if (email.length > 1) {
      user.email = email;
    }

    if (companyName.length > 1) {
      user.companyName = companyName;
    }

    if (phone.length > 1) {
      user.phone = phone;
    }

    if (url.length > 1) {
      user.url = url;
    }

    if (contactName.length > 1) {
      user.contactName = contactName;
    }

    if (addressLine1.length > 1) {
      user.address.addressLine1 = addressLine1;
    }

    if (addressLine2.length > 1) {
      user.address.addressLine2 = addressLine2;
    }

    if (city.length > 1) {
      user.address.city = city;
    }

    if (state.length > 1) {
      user.address.state = state;
    }

    if (zip.length > 1) {
      user.address.zip = zip;
    }

    if (country.length > 1) {
      user.address.country = country;
    }

    if (user.password) {
      if (password !== password2) {
        return alert('Passwords must match');
      }
    }
    console.log(user);
    dispatch(actions.startUpdateUser(user));
  }
  render () {
    var {auth} = this.props;
    return (
      <div>
        {/* <div className="bg-color"></div> */}
        <Nav />
        <div className="small-centered small-offset-2 medium-offset-3 large-offset-3 small-8 medium-6 large-6 center signup padMain">

          <div>
            <div className="radiusDouble">
              <h2 className="title-text centered">{auth.companyName ? auth.companyName : 'Company Profile'}</h2>
              <div className="small-centered center large-6">
                <p className="blueMain">Manage your company profile </p>

              </div>
            </div>
            <div>
                <div className="callout radiusDouble">
                    <form onSubmit={this.onSignup}>
                      <div className="row margin">
                        <div className="large-12 columns">
                          <h3>Profile</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="email">Email</label>
                          <input id="email" type="email" placeholder={auth.email ? auth.email : 'email'} ref="email" />
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="password">Password</label>
                          <input type="password" placeholder="password (leave blank to keep password as is)" ref="password" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <lable htmlFor="password2">Confirm password</lable>
                          <input id="password2" type="password" placeholder="confirm password (leave blank to keep password as is)" ref="password2" />
                        </div>
                      </div> */}
                      <div className="row margin">
                        <div className="large-12 columns">
                          <h3>Company Information</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-6 columns">
                          <label htmlFor="companyName">Company name</label>
                          <input id="companyName" type="text" placeholder={auth.companyName ? auth.companyName : 'company name'} ref="companyName" />
                        </div>
                        <div className="large-6 columns">
                          <label htmlFor="contactName">Contact name</label>
                          <input type="text" placeholder={auth.contactName ? auth.contactName : 'contact name'} ref="contactName" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-6 columns">
                          <label htmlFor="url">Website</label>
                          <input id="url" type="text" placeholder={auth.url ? auth.url : 'website'} ref="url" />
                        </div>
                        <div className="large-6 columns">
                          <label htmlFor="phone">Phone</label>
                          <input id="phone" type="tel" placeholder={auth.phone ? auth.phone : 'phone number'} ref="phone" />
                        </div>
                      </div>
                      <div className="row margin">
                        <div className="large-12 columns">
                          <h3>Address</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-6 columns">
                          <label htmlFor="addressLine1">Address line 1</label>
                          <input id="addressLine1" type="text" placeholder={auth.address.addressLine1 ? auth.address.addressLine1 : 'address line 1'} ref="addressLine1" />
                        </div>
                        <div className="large-6 columns">
                          <label htmlFor="addressLine2">Address line 2</label>
                          <input id="addressLine2" type="text" placeholder={auth.address.addressLine2 ? auth.address.addressLine2 : 'address line 2'} ref="addressLine2" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-4 columns">
                          <label htmlFor="city">City</label>
                          <input id="city" type="text" placeholder={auth.address.city ? auth.address.city : 'city'} ref="city" />
                        </div>
                        <div className="large-4 columns">
                          <label htmlFor="state">State</label>
                          <input id="state" type="text" placeholder={auth.address.state ? auth.address.state : 'state'} ref="state" />
                        </div>
                        <div className="large-4 columns">
                          <label htmlFor="zip">Zip</label>
                          <input id="zip" type="text" placeholder={auth.address.zip ? auth.address.zip : 'zip'} ref="zip" />
                        </div>
                      </div>



                      {/* <select ref="country">
                        <option value="United States" ref="country">United States</option>
                        <option value="Canada" ref="country">Canada</option>
                        <option value="Mexico" ref="country">Mexico</option>
                      </select> */}
                      {/* <input type="url" placeholder="country" ref="companyName" /> */}
                      <button className="margin button expanded radiusDouble" style={{backgroundColor: '#00457c'}}>Update</button>
                    </form>
                  </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Redux.connect(
  (state) => {
    return {
      auth: state.auth
    }
  }
)(Profile);
