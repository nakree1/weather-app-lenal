import React, { Fragment } from 'react';

export default class EditNoteArea extends React.Component {
  state = {
    isEditable: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({ isEditable: false });
    }
  }

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

    if (!selected) return <div className="notes-text notes__text-info">Select note</div>;

    const text = data.find(item => item.id === selected).text;

    return (
      <Fragment>
        {isEditable ? (
          <textarea
            className="notes__text notes__text-input"
            onBlur={this.handleSave}
            defaultValue={text}
            placeholder="Start typing..."
          />
        ) : (
          <div className={`notes__text ${!text.length ? 'notes__text-info' : ''}`} onClick={this.toggleEdit}>
            {text || 'Click to edit'}
          </div>
        )}
      </Fragment>
    );
  }
}
