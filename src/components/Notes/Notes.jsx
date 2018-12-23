import React from 'react';

export default class Notes extends React.Component {
  render() {
    return (
      <div className="notes">
        <div className="notes__sidebar">
          <div className="notes__item">Some text</div>
          <div className="notes__item">Another text</div>
          <div className="notes__item">LoremIpsum</div>
          <div className="notes__item notes__item-container">
            <input type="text" className="notes__item-input" />
            <button className="notes__item-button">Add note</button>
          </div>
        </div>
        <div className="notes__content">
          <textarea className="notes__text" />
        </div>
      </div>
    );
  }
}
