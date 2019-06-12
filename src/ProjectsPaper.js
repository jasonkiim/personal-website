const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const Dialog = require('material-ui/Dialog');
const FlatButton = require('material-ui/FlatButton');
const Paper = require('material-ui/Paper');
const IconButton = require('material-ui/IconButton');

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

    const actions = [
      <FlatButton label="Close" primary onClick={this.handleClose} />
    ];

    const imageVal = image[Object.keys(image)[0]];

    return (
      <React.Fragment>
        <Paper
          zDepth={1}
          className="project-image-paper"
          onClick={this.handleOpen}
        >
          <div className="bg">
            <img src={imageVal} alt="Asdf" />
            <div className="overlay">
              <h2 style={{ paddingTop: '25%' }}>{title}</h2>
            </div>
            <Dialog
              contentStyle={customDialogStyle}
              title={dialogTitle}
              actions={actions}
              modal={false}
              open={open}
              onRequestClose={this.handleClose}
            >
              <p className="project-description">
                <span style={{ fontWeight: '800' }}>{technologies}</span>
                {projectLink && (
                  <span style={{ float: 'right' }}>
                    <IconButton
                      href={projectLink}
                      iconClassName="fa fa-github"
                      target="_blank"
                      style={{
                        padding: 'none',
                        fontSize: '24px',
                        width: '40px',
                        height: '30px',
                        textAlign: 'center'
                      }}
                    />
                  </span>
                )}
                <br />
                <br />
                {description}
              </p>
            </Dialog>
          </div>
        </Paper>
      </React.Fragment>
    );
  }
});

module.exports(ProjectsPaper);
