import React from 'react';
import preloaderImg from '../../img/SpinnerGear.svg';

export default function Preloader({ height = 100 }) {
  return (
    <div className="preloader">
      <img src={preloaderImg} style={{ height: height + 'px' }} alt="Loading..." />
    </div>
  );
}

export function PreloaderImg({ height = 100 }) {
  return <img src={preloaderImg} style={{ height: height + 'px' }} alt="Loading..." />;
}
