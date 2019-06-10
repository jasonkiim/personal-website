/*eslint-disable */
import resume from './images/JasonKimF2018.pdf';

import React, { Component } from 'react';

export default class NavBar extends Component {
  componentDidMount() {
    this.time = setTimeout(() => { this.props.handleFadeChange(); }, this.props.delay);
  }

  componentDidUpdate() {
    this.time = setTimeout(() => { this.props.handleFadeChange(); }, this.props.delay);
  }


  render() {
    return (
      <div className="nav-bar">
        <button
          className="item"
          id={`${this.props.fading ? 'waitingTop' : 'top'}`}
          onClick={()=>this.props.handleStepChange(this.props.top)}
        >
            {this.props.top}
        </button>
        <a
          className="item"
          id={`${this.props.fading ? 'waitingRight' : 'right'}`}
          onClick={()=>this.props.handleStepChange(this.props.right)}
        >
          {this.props.right}
        </a>
        <a
          className="item"
          id={`${this.props.fading ? 'waitingLeft' : 'left'}`}
          href={resume}
          target="_blank"
        >
          {this.props.left}
        </a>
        <a
          className="item"
          id={`${this.props.fading ? 'waitingBottom' : 'bottom'}`}
          href="https://www.instagram.com/jason_kimm/"
          target="_blank"
        >
          {this.props.bottom}
        </a>
      </div>
    );
  }
}
