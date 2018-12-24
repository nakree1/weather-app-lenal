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
    const { isLoaded, data, createNote, currentDate, selectNote, selected } = this.props;
    if (!isLoaded) return null;

    const sidebarItems = data.map(item => (
      <div className={`notes__item ${item.id === selected ? 'active' : ''}`} key={item.id}>
        <span className="notes__item-text" onClick={() => selectNote(item.id)}>
          {item.title}
        </span>
        <div className="icon_wrap" onClick={() => this.handleDelete(item.id)}>
          <i className="fas fa-times" />
        </div>
      </div>
    ));

    return (
      <div className="notes">
        <div className="notes__sidebar">
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
