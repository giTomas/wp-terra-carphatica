import React, { Component } from 'react';
// import styled from 'styled-components';
// import R from 'ramda';
import { connect } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';
import {
  fetchMembers,
} from '../http/fetch'
import {
  membersLoaded,
  membersError,
} from '../actionCreators/actionCreators';

class Uvod extends Component {
  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {

    if (this.props.members.loaded) {
      return;
    }

    try {
      const [members, member] = await Promise.all([fetchMembers()]);
      this.props.membersLoaded(members)
      console.log(this.props.members.data)
    }
    catch (err) {
      this.props.membersError(err.message)
    }
  }

  render() {
    return (
      <div>
        {this.props.members.data.map(member => (
          <img key={member.slug} src={member.thumb} alt={member.name}/>
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  members: {
    data: state.membersState.members,
    loaded: state.membersState.loaded,
    error: state.membersState.error,
  }
})

const mapDispatchToProps = dispatch => ({
  membersLoaded: (members) => {
    dispatch(membersLoaded(members))
  },
  membersError: (errMsg) => {
    dispatch(membersError(errMsg))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uvod);
