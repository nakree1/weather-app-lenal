import React, { Fragment } from 'react';

export default function Wrapper({children}) {
  return (
    <Fragment>
      <header className="header">Weather App</header>
      <section className="container">
        {children}
      </section>
    </Fragment>
  )
}
