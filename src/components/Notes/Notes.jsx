import React from 'react';
import AddNoteButton from './Items/AddNoteButton';

export default class Notes extends React.Component {
  state = {
    selected: null,
  };

  render() {
    const { isLoaded, data, createNote, currentDate } = this.props;

    if (!isLoaded) return null;

    const sidebarItems = data.map(item => <div className="notes__item">{item.title}</div>);

    return (
      <div className="notes">
        <div className="notes__sidebar">
          {sidebarItems}
          <AddNoteButton createNote={createNote} currentDate={currentDate} />
        </div>
        <div className="notes__content">
          <textarea className="notes__text" />
        </div>
      </div>
    );
  }
}
