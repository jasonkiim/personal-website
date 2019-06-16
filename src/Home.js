const React = require('react');
const createReactClass = require('create-react-class');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faInbox } = require('@fortawesome/free-solid-svg-icons');
const {
  faLinkedin,
  faGithub,
  faInstagram
} = require('@fortawesome/free-brands-svg-icons');

const Home = createReactClass({
  displayName: 'Home',
  getInitialState() {
    return {
      fading: true,
      fadingLogo1: true,
      fadingLogo2: true,
      fadingLogo3: true,
      fadingLogo4: true
    };
  },
  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({ fading: false });
    }, 100);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo1: false });
    }, 500);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo2: false });
    }, 1000);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo3: false });
    }, 1500);
    this.time = setTimeout(() => {
      this.setState({ fadingLogo4: false });
    }, 2000);
  },
  render() {
    const {
      fading,
      fadingLogo1,
      fadingLogo2,
      fadingLogo3,
      fadingLogo4
    } = this.state;
    return (
      <div className={`${fading ? 'home-fading' : 'home-faded'}`}>
        <img
          className="logo"
          src={require('./images/logoBlack.png')}
          alt="awef"
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
    );
  }
});

module.exports = Home;
