import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for ths post'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
};
//['title', 'categories', 'content']

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => { this.context.router.push('/'); })
  }

  renderField(fieldConfig, field){
      //provided by redux-form
      const fieldHelper = this.props.fields[field];
      return (
          <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`} >
                <label>{fieldConfig.label}</label>
                    <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                  {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
          </div>):
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(props => this.onSubmit(props))} >
        <h3>Create A New Post</h3>

        {/* calling the renderField helper to render the same div for each input field:  (and binding this because it's making use of props inside of the helper) */}
        {_.map(FIELDS, this.renderField.bond(this))}


        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //lodash refactor of previous project
  _.each(FIELDS, (type,field)=>{
      if(!values[field]){
          errors[field] = `Enter a ${field}`;
      }
  });

  return errors;
}

export default reduxForm({
  form: 'PostsNew',
  //from the lodash library...returns all the keys
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);
