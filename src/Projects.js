const React = require('react');
const createReactClass = require('create-react-class');

const mainList = require('./list');
const ProjectsPaper = require('./ProjectsPaper');

const Projects = createReactClass({
  displayName: 'Projects',
  getInitialState() {
    return {
      fading: true
    };
  },
  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({ fading: false });
    }, 100);
  },
  render() {
    const { fading } = this.state;
    return (
      <div
        className={`${
          fading
            ? 'exp-projects-container-fading'
            : 'exp-projects-container-faded'
        }`}
      >
        <div className="exp-projects-container">
          {mainList.projectList.map((project, i) => (
            <ProjectsPaper
              key={i}
              dialogTitle={project.dialogTitle}
              image={project.img}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    );
  }
});

module.exports(Projects);
