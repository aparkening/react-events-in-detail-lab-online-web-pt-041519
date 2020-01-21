import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  // Report mouse coordinates
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button 
        onClick={this.handleClick}>
        Mouse Coordinates
      </button>
    )
  }
}
