import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit beach',
    iconName: 'sun yellow '
  },
  winter: {
    text: 'Brrr, it is chilly',
    iconName: 'snowflake blue'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName }= seasonConfig[season]

  return (
    <div className="container">
      <i className={`icon-left icon massive ${iconName}`}></i>
      <h2>{ text }</h2>
      <i className={`icon-right icon massive ${iconName}`}></i>
    </div> 
  );
};

export default SeasonDisplay;