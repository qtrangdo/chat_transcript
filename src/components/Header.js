import React from 'react';
import Proptypes from 'prop-types';
import { getDate } from '../dataHandlers';

const Header = ({ chatDate }) => {
  const formatDate = getDate(chatDate);
  return (
    <div>
      <div>
        CHAT TRANSCRIPT
      </div>
      <div>
        {formatDate}
      </div>
      <hr />
    </div>
  )
}

Header.propTypes = {
  chatDate: Proptypes.string.isRequired,
};

export default Header;