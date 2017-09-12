import React from 'react';
import wut, { CSSTransition, TransitionGroup, CSSTransitionGroup } from 'react-transition-group';
console.log('wut', wut);

export default class FadeInItems extends React.Component {

  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = { text: this.input.value, showing: false };
    this.setState({
      items: this.state.items.concat(newItem)
    });
    this.input.value = '';
    setTimeout(() => {
      const copy = this.state.items.slice();
      copy[copy.length - 1].showing = true;
      this.setState({
        items: copy
      });
    }, 10);
  }

  render() {

    return (
      <div className="transition-group-example">
        <h1>Fade In Items</h1>

        <form onSubmit={this.handleSubmit}>
          <input ref={(input) => this.input = input} />
        </form>

        <ul>
          {this.state.items.map((item, index) => {
            const klass = item.showing ? 'showing' : ''
            return <li key={index} className={klass}>{item.text}</li>
          })}
        </ul>

      </div>
    )
  }

}
