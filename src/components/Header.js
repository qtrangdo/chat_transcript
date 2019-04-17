import React from 'react';
import Proptypes from 'prop-types';
import { getDate } from '../dataHandlers';

const Header = ({ chatDate }) => {
  const formatDate = getDate(chatDate);
  return (
    <div className="header">
      <div className="title dark">
        CHAT TRANSCRIPT
      </div>
      <div className="light">
        {formatDate}
      </div>
    </div>
  )
}

Header.propTypes = {
  chatDate: Proptypes.string.isRequired,
};

export default Header;