import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  membersCategoriesLoader,
} from '..redux/actionCreators/membersCategories';
import { checkSuccess } from '../selectors/';

class DataLoader extends Component {

  async componentDidMount() {
    !this.props.success && this.props.fetchMembersCategories();
  }

  render() {

    return (
      // <div className={!this.props.success ? 'page-loading' : 'page'}>
      //   { this.props.success ? this.props.children : <p>Loading...</p> }
      // </div>
      <div className='page'>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  success: checkSuccess(state),
});

const mapDispatchToProps = dispatch => ({
  fetchMembersCategories: () => dispatch(membersCategoriesLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataLoader)
