import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import Dropzone from 'react-dropzone';

import Nav from 'Nav';
import SideNav from 'SideNav';

class CreateProducts extends React.Component {
  constructor (props) {
    super(props);
    this.onSignup = this.onSignup.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.state = {};
  }
  onImageDrop (files) {
    this.setState({
      imageFile: files[0]
    });
  }
  onSignup (e) {
    e.preventDefault();
    var {dispatch, auth, preview} = this.props;
    var product = {
      name: this.refs.name.value,
      number: this.refs.number.value,
      description: this.refs.description.value,
      image: this.state.imageFile,
      price: this.refs.price.value
    };

    dispatch(actions.startCreateProduct(product));
  }
  renderPreview() {
    var image = this.state.imageFile;

    if (image) {
      return (
        <div style={{height: '75px', width: '75px'}}>
          <img src={image.preview} style={{maxHeight: '100%', maxWidth: '100%'}}></img>
        </div>
      );
    }
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
              <h2 className="title-text centered">Create Products</h2>
            </div>
            <div>
                <div className="callout radiusDouble">
                  <div className="large-12 columns">
                    <label>Part image</label>
                    <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop} className="button">
                      Upload an image
                    </Dropzone>
                    {this.renderPreview()}
                  </div>
                    <form onSubmit={this.onSignup}>

                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="name">Name</label>
                          <input id="name" type="text" placeholder="part name" ref="name" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="description">Description</label>
                          <textarea id="description" placeholder="part description" ref="description" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="number">Part number</label>
                          <input id="number" type="text" placeholder="part number" ref="number" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="price">Price</label>
                          <input id="price" type="number" placeholder="part price" ref="price" />
                        </div>
                      </div>

                      <button className="margin button expanded radiusDouble" style={{backgroundColor: '#00457c'}}>Create Product</button>
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
)(CreateProducts);
