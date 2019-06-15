const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const ExperiencePaper = createReactClass({
  displayName: 'ExperiencePaper',
  propTypes: {
    title: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    description3: PropTypes.string.isRquired,
    description4: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      open: false
    };
  },
  handleOpen() {
    this.setState({ open: true });
  },
  handleClose() {
    this.setState({ open: false });
  },
  render() {
    const customDialogStyle = {
      width: '100%',
      maxWidth: '700px',
      padding: '40px'
    };

    const {
      title,
      job,
      description1,
      description2,
      description3,
      description4,
      image
    } = this.props;

    const { open } = this.state;

    const imageVal = image[Object.keys(image)[0]];

    return (
      <React.Fragment>
        <div className="bg">
          <img src={imageVal} alt="asdfasd" />
          <div className="overlay">
            <h2>{title}</h2>
          </div>
          <p className="job-description">
            {description1} <br />
            <br />
            {description2} <br />
            <br />
            {description3} <br />
            <br />
            {description4}
          </p>
        </div>
      </React.Fragment>
    );
  }
});

module.exports = ExperiencePaper;
