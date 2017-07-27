import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers/';
import {
  memberReset,
  memberLoader,
} from '../actionCreators/member';

const Member = ({member}) => (
  <div className="member">
    <h2 className="memberName">{member.title}</h2>
    <div className="memberText" dangerouslySetInnerHTML={createMarkup(member.content)} />
  </div>
)

class Clen extends PureComponent {

  async componentDidMount() {
    this.props.fetchMember(this.props.match.params.slug);
  }

  componentWillUnmount() {
    this.props.memberReset();
  }

  render() {
    return (
      <Member member={this.props.member.data}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  member: state.member,
});

const mapDispatchToProps = dispatch => ({
  memberReset: () => {
    dispatch(memberReset());
  },
  fetchMember: (id) => dispatch(memberLoader(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clen);
