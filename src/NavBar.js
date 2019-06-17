const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const NavBar = createReactClass({
  displayName: 'NavBar',
  propTypes: {
    handleFadeChange: PropTypes.func.isRequired,
    handleStepChange: PropTypes.func.isRequired,
    top: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    delay: PropTypes.integer,
    fading: PropTypes.bool.isRequired
  },
  componentDidMount() {
    const { handleFadeChange, delay } = this.props;

    this.time = setTimeout(() => {
      handleFadeChange();
    }, delay);
  },
  componentDidUpdate() {
    const { handleFadeChange, delay } = this.props;
    this.time = setTimeout(() => {
      handleFadeChange();
    }, delay);
  },
  render() {
    const { fading, handleStepChange, top, right, left, bottom } = this.props;
    return (
      <div className="nav-bar">
        <button
          type="button"
          className="item"
          id={`${fading ? 'waitingTop' : 'top'}`}
          onClick={() => handleStepChange(top)}
        >
          {top}
        </button>
        <button
          type="button"
          className="item"
          id={`${fading ? 'waitingRight' : 'right'}`}
          onClick={() => handleStepChange(right)}
        >
          {right}
        </button>
        <a
          type="button"
          className="item"
          id={`${fading ? 'waitingLeft' : 'left'}`}
          href={require('./images/JasonKimF2019.pdf')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {left}
        </a>
        <a
          type="button"
          className="item"
          id={`${fading ? 'waitingBottom' : 'bottom'}`}
          href="https://www.instagram.com/pprzzi_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {bottom}
        </a>
      </div>
    );
  }
});

module.exports = NavBar;
