import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import logoBlack from './images/logoBlack.png';
import logoBlue from './images/logoBlue.png';

export default class LoadingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      fading: true,
      change: true,
      loadingFading: true,
      fadingLogo1: true,
      fadingLogo2: true,
      fadingLogo3: true,
      fadingLogo4: true,
    };
  }

  componentDidMount() {
    this.time = setTimeout(() => { this.setState({ loadingFading: false }); }, 100);
    this.time = setTimeout(() => {
      for (let index = 0; index < 300; index += 1) {
        this.setState({ width: this.state.width + 1 });
      }
    }, 150);

    this.time = setTimeout(() => { this.setState({ change: false }); }, 4500);
    this.time = setTimeout(() => { this.setState({ fading: false }); }, 3000);
    this.time = setTimeout(() => { this.setState({ fadingLogo1: false }); }, 4500);
    this.time = setTimeout(() => { this.setState({ fadingLogo2: false }); }, 5000);
    this.time = setTimeout(() => { this.setState({ fadingLogo3: false }); }, 5500);
    this.time = setTimeout(() => { this.setState({ fadingLogo4: false }); }, 6000);
  }

  render() {
    return (
      <React.Fragment>
        <div className={`${this.state.loadingFading ? 'stepper-main-fading' : 'stepper-main-faded'}`}>
          <img className={`${this.state.change ? 'logo' : 'logo-faded'}`} src={logoBlue} alt="asdf" />
          <div className="stepper-bar" style={{ width: `${this.state.width}px`, maxWidth: '100%' }} id={`${this.state.change ? '' : 'stepper-faded'}`} />
        </div>
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
      </React.Fragment>
    );
  }
}
