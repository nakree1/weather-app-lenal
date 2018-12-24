import React from 'react';

export default function ForecastStateIcon({ state }) {
  let icon;

  switch (state) {
    case 'sn':
      icon = 'far fa-snowflake';
      break;
    case 'sl':
      icon = 'fas fa-smog';
      break;
    case 'h':
      icon = 'fas fa-cloud-meatball';
      break;
    case 't':
      icon = 'fas fa-bolt';
      break;
    case 'hr':
      icon = 'fas fa-cloud-showers-heavy';
      break;
    case 'lr':
      icon = 'fas fa-cloud-showers-heavy';
      break;
    case 's':
      icon = 'fas fa-cloud-sun-rain';
      break;
    case 'hc':
      icon = 'fas fa-cloud';
      break;
    case 'lc':
      icon = 'fas fa-cloud-sun';
      break;
    case 'c':
      icon = 'fas fa-sun';
      break;
  }

  return (
    <div className="icon_wrap">
      <i className={icon} />
    </div>
  );
}
