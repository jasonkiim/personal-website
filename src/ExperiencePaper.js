const React = require('react');
const createReactClass = require('create-react-class');

const ExperiencePaper = createReactClass({
  displayName: 'ExperiencePaper',
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
    return null;
  }
});

module.exports(ExperiencePaper);
