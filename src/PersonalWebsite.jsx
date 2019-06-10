import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoadingPage from './LoadingPage';
import NavBar from './NavBar';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Photography from './Photography';

import './styles/App.css';

export default class PersonalWebsite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      clicked: false,
      fading: true,
      loadingDone: false,
    };
  }

  handleFadeChange = () => {
    this.setState({ fading: false });
  }

  loadOnce = () => {
    this.setState({ loadingDone: true });
  }

  handleStepChange = (stepType) => {
    if (stepType === 'HOME') {
      this.setState({ step: 1, fading: true });
    } else if (stepType === 'EXPERIENCE') {
      this.setState({ step: 2, fading: true });
    } else if (stepType === 'PROJECTS') {
      this.setState({ step: 3, fading: true });
    } else if (stepType === 'CONTACT') {
      this.setState({ step: 4, fading: true });
    }
  }

  render() {
    return (
        <div className="container">
          {/* IIFE in JSX */}
          {[(() => {
              if (this.state.step === 0) {
                return (
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
                    <LoadingPage
                      {...this.state}
                      loadOnce={this.loadOnce}
                    />
                  </React.Fragment>
                );
               } else if (this.state.step === 1) {
                 return (
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
                     <Home
                       {...this.state}
                     />
                   </React.Fragment>
                 );
               } else if (this.state.step === 2) {
                 return (
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
                     <Experience
                       {...this.state}
                     />
                   </React.Fragment>
                 );
               } else if (this.state.step === 3) {
                 return (
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
                     <Projects
                       {...this.state}
                     />
                   </React.Fragment>
                 );
               } else if (this.state.step === 4) {
                 return (
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
                     <Photography
                       {...this.state}
                     />
                   </React.Fragment>
                 );
               }
             })()]}
        </div>
    );
  }
}
