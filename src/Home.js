import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import logoBlack from './images/logoBlack.png';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fading: true,
      fadingLogo1: true,
      fadingLogo2: true,
      fadingLogo3: true,
      fadingLogo4: true,
    };
  }

  componentDidMount() {
    this.time = setTimeout(() => { this.setState({ fading: false }); }, 100);
    this.time = setTimeout(() => { this.setState({ fadingLogo1: false }); }, 500);
    this.time = setTimeout(() => { this.setState({ fadingLogo2: false }); }, 1000);
    this.time = setTimeout(() => { this.setState({ fadingLogo3: false }); }, 1500);
    this.time = setTimeout(() => { this.setState({ fadingLogo4: false }); }, 2000);
  }

  render() {
    return (
      <div className={`${this.state.fading ? 'home-fading' : 'home-faded'}`}>
        <img className="logo" src={logoBlack} alt="Asdasdf" />
        <div className="home-logos">
          <span className={`${this.state.fadingLogo1 ? 'home-logos-fading' : 'home-logos-faded'}`}>
            <IconButton
              iconClassName="fa fa-linkedin"
              href="https://www.linkedin.com/in/jasonkiim/"
              tooltip="LinkedIn"
              target="_blank"
            />
          </span>
          <span className={`${this.state.fadingLogo2 ? 'home-logos-fading' : 'home-logos-faded'}`}>
            <IconButton
              iconClassName="fa fa-envelope"
              href="mailto:e53kim@edu.uwaterloo.ca"
              tooltip="Contact Me!"
              target="_blank"
            />
          </span>
          <span className={`${this.state.fadingLogo3 ? 'home-logos-fading' : 'home-logos-faded'}`}>
            <IconButton
              iconClassName="fa fa-github"
              href="https://github.com/jasonkiim"
              tooltip="View GitHub"
              target="_blank"
            />
          </span>
          <span className={`${this.state.fadingLogo4 ? 'home-logos-fading' : 'home-logos-faded'}`}>
            <IconButton
              iconClassName="fa fa-instagram"
              href="https://www.instagram.com/jason_kimm/"
              tooltip="Instagram"
              target="_blank"
            />
          </span>
        </div>
      </div>
    );
  }
}
