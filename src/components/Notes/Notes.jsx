import React from 'react';
import AddNoteButton from './Items/AddNoteButton';
import EditNoteArea from './Items/EditNoteArea';

export default class Notes extends React.Component {
  handleDelete = id => {
    if (id === this.props.selected) {
      this.props.clearSelection();
    }

    this.props.deleteNote({
      id: id,
      date: this.props.currentDate,
    });
  };

  handleSave = value => {
    this.props.saveNote({
      date: this.props.currentDate,
      id: this.props.selected,
      text: value,
    });
  };

  render() {
    const { isLoaded, data, createNote, currentDate, deleteNote, saveNote, selectNote, selected } = this.props;

    if (!isLoaded) return null;

    const sidebarItems = data.map(item => (
      <div className="notes__item" key={item.id}>
        <span onClick={() => selectNote(item.id)}>{item.title}</span>
        <br />
        <span onClick={() => this.handleDelete(item.id)}>Delete</span>
      </div>
    ));

    return (
      <div className="notes">
        <div className="notes__sidebar">
          <div className="notes__date">{currentDate}</div>
          {sidebarItems}
          <AddNoteButton createNote={createNote} currentDate={currentDate} />
        </div>
        <div className="notes__content">
          <EditNoteArea data={data} selected={selected} save={this.handleSave} />
        </div>
      </div>
    );
  }
}
