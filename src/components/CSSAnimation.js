import React from 'react';

export default class CSSAnimation extends React.Component {

  state = {
    isAnimating: false
  }

  handleAnimationToggle = () => {
    this.setState({
      isAnimating: !this.state.isAnimating
    })
  }

  render() {

    const klass = this.state.isAnimating ? 'animatable-thing animated' : 'animatable-thing'

    return (
      <div>
        <h1>CSS Animation</h1>
        <button onClick={this.handleAnimationToggle}>Click on this.</button>
        <div className={klass}></div>
      </div>
    );
  }

}
