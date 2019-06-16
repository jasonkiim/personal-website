const React = require('react');
const createReactClass = require('create-react-class');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faInbox } = require('@fortawesome/free-solid-svg-icons');
const {
  faLinkedin,
  faGithub,
  faInstagram
} = require('@fortawesome/free-brands-svg-icons');

const LoadingPage = createReactClass({
  displayName: 'LoadingPage',
  getInitialState() {
    return {
      width: 0,
      fading: true,
      change: true,
      loadingFading: true,
      fadingLogo1: true,
      fadingLogo2: true,
      fadingLogo3: true,
      fadingLogo4: true
    };
  },
  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({ loadingFading: false });
    }, 100);
    this.time = setTimeout(() => {
      for (let index = 0; index < 300; index += 1) {
        const { width } = this.state;
        this.setState({ width: width + 1 });
      }
    }, 150);

    this.time = setTimeout(() => {
      this.setState({ change: false });
    }, 4500);
    this.time = setTimeout(() => {
      this.setState({ fading: false });
    }, 3000);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo1: false });
    }, 4500);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo2: false });
    }, 5000);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo3: false });
    }, 5500);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo4: false });
    }, 6000);
  },
  render() {
    const {
      loadingFading,
      change,
      width,
      fading,
      fadingLogo1,
      fadingLogo2,
      fadingLogo3,
      fadingLogo4
    } = this.state;

    return (
      <React.Fragment>
        <div
          className={`${
            loadingFading ? 'stepper-main-fading' : 'stepper-main-faded'
          }`}
        >
          <img
            className={`${change ? 'logo' : 'logo-faded'}`}
            src={require('./images/logoBlue.png')}
            alt="asdf"
          />
          <div
            className="stepper-bar"
            style={{ width: `${width}px`, maxWidth: '100%' }}
            id={`${change ? '' : 'stepper-faded'}`}
          />
        </div>
        <div className={`${fading ? 'home-fading' : 'home-faded'}`}>
          <img
            className="logo"
            src={require('./images/logoBlack.png')}
            alt="Asdasdf"
          />
          <div className="home-logos">
            <span
              className={`${
                fadingLogo1 ? 'home-logos-fading' : 'home-logos-faded'
              }`}
            >
              <a
                href="https://www.linkedin.com/in/jasonkiim/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </span>
            <span
              className={`${
                fadingLogo2 ? 'home-logos-fading' : 'home-logos-faded'
              }`}
            >
              <a href="mailto:e53kim@edu.uwaterloo.ca" className="icon">
                <FontAwesomeIcon icon={faInbox} size="2x" />
              </a>
            </span>
            <span
              className={`${
                fadingLogo3 ? 'home-logos-fading' : 'home-logos-faded'
              }`}
            >
              <a
                href="https://github.com/jasonkiim"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </span>
            <span
              className={`${
                fadingLogo4 ? 'home-logos-fading' : 'home-logos-faded'
              }`}
            >
              <a
                href="https://www.instagram.com/pprzzi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
});

module.exports = LoadingPage;
