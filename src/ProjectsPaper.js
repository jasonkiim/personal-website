const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const ProjectsPaper = createReactClass({
  displayName: 'ProjectsPaper',
  propTypes: {
    dialogTitle: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRquired,
    description: PropTypes.string.isRequired
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
    const {
      dialogTitle,
      technologies,
      projectLink,
      title,
      image,
      description
    } = this.props;
    const { open } = this.state;

    const customDialogStyle = {
      width: '100%',
      maxWidth: '700px',
      padding: '40px'
    };

    const imageVal = image[Object.keys(image)[0]];

    return (
      <React.Fragment>
        <div className="bg">
          <img src={imageVal} alt="Asdf" />
          <div className="overlay">
            <h2 style={{ paddingTop: '25%' }}>{title}</h2>
          </div>
          <p className="project-description">
            <span style={{ fontWeight: '800' }}>{technologies}</span>
            {projectLink && <span style={{ float: 'right' }}>asdf</span>}
            <br />
            <br />
            {description}
          </p>
        </div>
      </React.Fragment>
    );
  }
});

module.exports = ProjectsPaper;
