import React from 'react';
import getGeolocation from '../../utils/getGeolocation';
import api from '../../config/api';

export default class Location extends React.Component {
  state = {
    showDropdown: false,
  };

  componentDidMount() {
    getGeolocation(this.props.fetchCurrentLocation, () => {});
  }

  componentDidUpdate(prevProps) {
    const { hints, query, status } = this.props;
    if (prevProps.query !== query && hints.length && status === 'success') {
      this.setState({
        showDropdown: true,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }

  getLocationByCoords = coords => {};

  openDropdown = () => {
    if (!this.state.showDropdown) {
      this.setState({ showDropdown: true });
      document.addEventListener('click', this.closeDropdown);
    }
  };

  closeDropdown = e => {
    try {
      const { id, title } = e.target.dataset;
      const isLi = e.target.classList.contains('dropdown__item');

      if (isLi && id && title) {
        this.props.selectLocation({ id, title });
        this.props.clearHints();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ showDropdown: false });
      document.removeEventListener('click', this.closeDropdown);
    }
  };

  selectByKey = e => {
    const { hints } = this.props;
    if (e.key === 'Enter' && hints.length) {
      this.props.selectLocation({ id: hints[0].woeid, title: hints[0].title });
      this.props.clearHints();
    }
  };

  getLocation = ({ currentTarget }) => {
    this.props.fetchSearchHints(currentTarget.value);
    this.openDropdown();
  };

  render() {
    const { showDropdown } = this.state;
    const { hints, query } = this.props;

    const list = hints.map(hint => (
      <li className="dropdown__item" key={hint.woeid} data-title={hint.title} data-id={hint.woeid}>
        {hint.title}
      </li>
    ));

    return (
      <div className="location">
        <div className="location__label">Location:</div>
        <div className="dropdown">
          <input
            type="text"
            className="dropdown__input"
            onChange={this.getLocation}
            onClick={this.openDropdown}
            onKeyPress={this.selectByKey}
            value={query}
          />

          <ul className={`dropdown__list ${hints.length && showDropdown ? 'active' : ''}`}>{hints.length && list}</ul>
        </div>
      </div>
    );
  }
}
