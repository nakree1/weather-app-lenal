import React from 'react'


export default class Location extends React.Component {

  getLocation = ({currentTarget}) => {
    this.props.fetchSearchHints(currentTarget.value)
  }

  render() {
    console.log(this.props)
    const {hints} = this.props;

    const list = hints.map((hint) => (
      <li className="dropdown__item" key={hint.woeid}>
        {hint.title}
      </li>
    ))

    return (
      <div className="location">
        <div className="location__label">
          Location:
        </div>
        <div className="dropdown active">
          <input type="text" className="dropdown__input" onChange={this.getLocation}/>

          {
            hints.length > 0 && (
              <ul className="dropdown__list active">
                {list}
              </ul>
            )
          }

        </div>
      </div>
    )
  }
}