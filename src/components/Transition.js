import React from 'react';

export default class Transition extends React.Component {

  state = {
    inlineWidth: '50%',
    isBig: false
  }

  handleInlineToggle = () => {
    this.setState({
      inlineWidth: this.state.inlineWidth === '50%' ? '100%' : '50%'
    });
  }

  handleClassToggle = () => {
    this.setState({
      isBig: !this.state.isBig
    });
  }

  render() {

    const klass = this.state.isBig ? 'transition-class transition-class-override' : 'transition-class';


    return (
      <div>
        <h1>Transition Example</h1>

        <h2>Inline</h2>

        <button onClick={this.handleInlineToggle}>Hit This Button</button>
        <p>In this example, all the styling is applied inline.</p>
        <div style={{ height: '50px', backgroundColor: 'red', transition: 'all 2s', width: this.state.inlineWidth}}></div>


        <h2>Class</h2>

        <button onClick={this.handleClassToggle}>Hit This Button</button>
        <p>In this example, the styling is applied via classes.</p>
        <div className={klass}></div>

      </div>
    );
  }

}
