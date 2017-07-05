import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import Dropzone from 'react-dropzone';

import Nav from 'Nav';

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
    var {dispatch, auth, partDetails} = this.props;
    var part = {};

    if (this.refs.name && this.refs.name.value.length > 1) {
      part.name = this.refs.name.value;
    }

    if (this.refs.number && this.refs.number.value.length > 1) {
      part.number = this.refs.number.value;
    }

    if (this.refs.description && this.refs.description.value.length > 1) {
      part.description = this.refs.description.value;
    }

    if (this.state.imageFile) {
      part.image = this.state.imageFile;
    }

    if (this.refs.price && this.refs.price.value.length > 1) {
      part.price = this.refs.price.value;
    }

    dispatch(actions.startEditProduct(part, partDetails._id));
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
    var {auth, partDetails} = this.props;
    return (
      <div>
        {/* <div className="bg-color"></div> */}
        <Nav />
        <div className="small-centered small-offset-2 medium-offset-3 large-offset-3 small-8 medium-6 large-6 center signup padMain">

          <div>
            <div className="radiusDouble">
              <h2 className="title-text centered">Edit Part</h2>
            </div>
            <div>
                <div className="callout radiusDouble">
                  <div className="large-12 columns">
                    <label>Part image: </label>
                    <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop} className="button">
                      Upload an image
                    </Dropzone>
                    {this.renderPreview()}
                  </div>
                    <form onSubmit={this.onSignup}>

                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="name">Name: {partDetails.name}</label>
                          <input id="name" type="text" placeholder="part name" ref="name" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="description">Description: {partDetails.description}</label>
                          <textarea id="description" placeholder="part description" ref="description" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="number">Part number: {partDetails.number}</label>
                          <input id="number" type="text" placeholder="part number" ref="number" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-12 columns">
                          <label htmlFor="price">Price {partDetails.price}</label>
                          <input id="price" type="number" placeholder="part price" ref="price" />
                        </div>
                      </div>

                      <button className="margin button expanded radiusDouble" style={{backgroundColor: '#00457c'}}>Submit Changes</button>
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
      auth: state.auth,
      partDetails: state.partDetails
    }
  }
)(CreateProducts);
