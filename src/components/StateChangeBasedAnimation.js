import React from 'react';

export default class StateChangeBasedAnimation extends React.Component {

  constructor() {
    super();

    this.state = {
      x: 0,
      direction: 'right'
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {

      let x = this.state.x;
      let direction = this.state.direction;

      if (this.state.x > 500) {
        direction = 'left';
        this.setState({ direction: direction });
      }
      if (this.state.x <= 0) {
        direction = 'right';
        this.setState({ direction: direction });
      }

      if (direction === 'left') {
        x -= 5;
      }
      else {
        x += 5;
      }
      this.setState({ x: x });

    }, 20);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {

    const style = {
      backgroundColor: 'blue',
      height: '50px',
      left: this.state.x + 'px',
      position: 'absolute',
      width: '50px'
    }

    return (
      <div>
        <h1>State Changed-Based Animation</h1>
        <div style={style}>
        </div>
      </div>
    )
  }
}
