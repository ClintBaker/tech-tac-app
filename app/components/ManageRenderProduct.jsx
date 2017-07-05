import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

class ManageRenderProduct extends React.Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onEdit(e) {
    e.preventDefault();
    var {dispatch, part} = this.props;
    dispatch(actions.setPartDetails(part));
    hashHistory.push('/edit/part');
  }
  onDelete(e) {
    e.preventDefault();
    var {dispatch, part} = this.props;
    var partId = part._id;

    if (confirm('Are you sure you want to delete this part?')) {
      dispatch(actions.startDeletePart(partId));
    } else {
      alert('Action aborted');
    }
  }
  render () {
    var part = this.props.part;
    return (
      <div key={part._id} className="columns small-12 medium-6 large-4 callout">
        <h4>{part.name}</h4>
        <p>{part.description}</p>
        <div className="row">
          <div className="columns small-12 large-12">
            <button onClick={this.onEdit} className="button small radius">Edit</button>
            <button onClick={this.onDelete} className="button small alert radius">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      parts: state.parts
    }
  }
)(ManageRenderProduct);
