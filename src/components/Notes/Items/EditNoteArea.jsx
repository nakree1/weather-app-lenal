import React, { Fragment } from 'react';

export default class EditNoteArea extends React.Component {
  state = {
    isEditable: false,
  };

  toggleEdit = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }));
  };

  handleSave = ({ currentTarget }) => {
    this.props.save(currentTarget.value);
    this.toggleEdit();
  };

  render() {
    const { isEditable } = this.state;
    const { data, selected } = this.props;

    if (!selected) return <div className="notes__text">Select note</div>;

    const text = data.find(item => item.id === selected).text;

    return (
      <Fragment>
        {isEditable ? (
          <textarea
            className="notes__text"
            onBlur={this.handleSave}
            defaultValue={text}
            placeholder="Start typing..."
          />
        ) : (
          <div className="notes__text" onClick={this.toggleEdit}>
            {text || 'Click to edit'}
          </div>
        )}
      </Fragment>
    );
  }
}
