import React from 'react';

const Loader = ({ message }) => {
  return (
    <div className="ui active big dimmer">
      <div className="ui text loader">{message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: 'Loading...'
};

export default Loader;