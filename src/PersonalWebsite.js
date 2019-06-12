const React = require('react');
const createReactClass = require('create-react-class');

const LoadingPage = require('./LoadingPage');
const NavBar = require('./NavBar');
const Home = require('./Home');
const Experience = require('./Experience');
const Projects = require('./Projects');
const Photography = require('./Photography');

const styles = require('./styles/App.css');

const PersonalWebsiteLayout = createReactClass({
  displayName: 'PersonalWebsiteLayout',
  getInitialState() {
    return {
      step: 0,
      clicked: false,
      fading: true,
      loadingDone: false
    };
  },
  handleFadeChange() {
    this.setState({ fading: false });
  },
  loadOnce() {
    this.setState({ loadingDone: true });
  },
  handleStepChange(stepType) {
    if (stepType === 'HOME') {
      this.setState({ step: 1, fading: true });
    } else if (stepType === 'EXPERIENCE') {
      this.setState({ step: 2, fading: true });
    } else if (stepType === 'PROJECTS') {
      this.setState({ step: 3, fading: true });
    } else if (stepType === 'CONTACT') {
      this.setState({ step: 4, fading: true });
    }
  },
  render() {
    const { step } = this.state;
    return (
      <div className="container">
        {step === 0 && (
          <React.Fragment>
            <NavBar
              {...this.state}
              handleStepChange={this.handleStepChange}
              handleFadeChange={this.handleFadeChange}
              top="EXPERIENCE"
              right="PROJECTS"
              bottom="PHOTOGRAPHY"
              left="RESUME"
              delay={3000}
            />
            <LoadingPage {...this.state} loadOnce={this.loadOnce} />
          </React.Fragment>
        )}
        {step === 1 && (
          <React.Fragment>
            <NavBar
              {...this.state}
              handleStepChange={this.handleStepChange}
              handleFadeChange={this.handleFadeChange}
              top="EXPERIENCE"
              right="PROJECTS"
              bottom="PHOTOGRAPHY"
              left="RESUME"
              delay={400}
            />
            <Home {...this.state} />
          </React.Fragment>
        )}
        {step === 2 && (
          <React.Fragment>
            <NavBar
              {...this.state}
              handleStepChange={this.handleStepChange}
              handleFadeChange={this.handleFadeChange}
              top="HOME"
              right="PROJECTS"
              bottom="PHOTOGRAPHY"
              left="RESUME"
              delay={400}
            />
            <Experience {...this.state} />
          </React.Fragment>
        )}
        {step === 3 && (
          <React.Fragment>
            <NavBar
              {...this.state}
              handleStepChange={this.handleStepChange}
              handleFadeChange={this.handleFadeChange}
              top="EXPERIENCE"
              right="HOME"
              bottom="PHOTOGRAPHY"
              left="RESUME"
              delay={400}
            />
            <Projects {...this.state} />
          </React.Fragment>
        )}
        {step === 4 && (
          <React.Fragment>
            <NavBar
              {...this.state}
              handleStepChange={this.handleStepChange}
              handleFadeChange={this.handleFadeChange}
              top="EXPERIENCE"
              right="PROJECTS"
              bottom="HOME"
              left="RESUME"
              delay={400}
            />
            <Photography {...this.state} />
          </React.Fragment>
        )}
      </div>
    );
  }
});

module.exports = PersonalWebsiteLayout;
