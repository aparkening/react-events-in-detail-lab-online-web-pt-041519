import React, { Component } from 'react';

export default class DelayedButton extends Component {
  //
  handleClick = (event) => {
    // Remove synthetic event from pool
    event.persist()
    // Send event to onDelayedClick after props.delay
    setTimeout(() => { 
      this.props.onDelayedClick(event) }, 
      this.props.delay
    )
  }

  render() {
    return (
      <button 
        onClick={this.handleClick}>
        Delayed Click
      </button>
    )
  }
}
