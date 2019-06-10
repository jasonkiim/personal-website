import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';

export default class ProjectsPaper extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }


    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
      const customDialogStyle = {
        width: '100%',
        maxWidth: '700px',
        padding: '40px',
      };

      const actions = [
        <FlatButton
          label="Close"
          primary
          onClick={this.handleClose}
        />,
      ];


      const imageVal = this.props.image[Object.keys(this.props.image)[0]];
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
                <h2 style={{ paddingTop: '25%' }}>{this.props.title}</h2>
              </div>
              <Dialog
                contentStyle={customDialogStyle}
                title={this.props.dialogTitle}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <p className="project-description">
                  <span style={{ fontWeight: '800' }}>{this.props.technologies}</span>
                  {this.props.projectLink &&
                  <span style={{ float: 'right' }}>
                    <IconButton
                      href={this.props.projectLink}
                      iconClassName="fa fa-github"
                      target="_blank"
                      style={{ padding: 'none', fontSize: '24px', width: '40px', height: '30px', textAlign: 'center' }}
                    />
                  </span>
                  }
                  <br /><br />
                  {this.props.description}
                </p>
              </Dialog>
            </div>
          </Paper>
        </React.Fragment>
      );
    }
}
