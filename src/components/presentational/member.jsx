import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../helpers/';

const Member = ({resource}) => (
  <div className="member">
    <h2 className="memberName">{resource.title}</h2>
    <div className="memberText" dangerouslySetInnerHTML={createMarkup(resource.content)} />
  </div>
);

Member.propTypes = {
  resource: PropTypes.objectOf(PropTypes.string)
}


export default Member;
