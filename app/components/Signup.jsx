import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.onSignup = this.onSignup.bind(this);

  }
  onSignup () {
    var {dispatch} = this.props;
    var password = this.refs.password.value;
    var password2 = this.refs.password2.value;
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
    var country = this.refs.country.value;

    var newUser = {
      password,
      email,
      companyName,
      phone,
      url,
      contactName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      country
    };

    dispatch(actions.startSignup(newUser));
  }
  render () {
    return (
      <div className="center columns small-centered small-10 medium-6 large-4">
          <div className="callout">
              <h3>Signup</h3>
              <form onSubmit={this.onSignup}>
                <input type="email" placeholder="email" ref="email" />
                <input type="password" placeholder="password" ref="password" />
                <input type="password" placeholder="confirm password" ref="password2" />
                <input type="text" placeholder="company name" ref="companyName" />
                <input type="tel" placeholder="contact phone number" ref="phone" />
                <input type="text" placeholder="company website" ref="url" />
                <input type="text" placeholder="contact name" ref="contactName" />
                <input type="text" placeholder="address Line 1" ref="addressLine1" />
                <input type="text" placeholder="address Line 2" ref="addressLine2" />
                <input type="text" placeholder="city" ref="city" />
                <input type="text" placeholder="state / province / region" ref="state" />
                <input type="text" placeholder="zip or postal code" ref="zip" />
                <select ref="country">
                  <option value="United States" ref="country">United States</option>
                  <option value="Canada" ref="country">Canada</option>
                  <option value="Mexico" ref="country">Mexico</option>
                </select>
                {/* <input type="url" placeholder="country" ref="companyName" /> */}
                <button className="button">Submit</button>
              </form>
            </div>
      </div>
    );
  }
}

export default Redux.connect()(Signup);
