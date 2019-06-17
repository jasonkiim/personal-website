const React = require('react');
const createReactClass = require('create-react-class');
const classNames = require('classnames');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faGithub } = require('@fortawesome/free-brands-svg-icons');

const mainList = require('./list');
const styles = require('./styles/Projects.module.css');
const flexStyles = require('./styles/FlexStyles.module.css');

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
  renderProjectsList(projectsList) {
    return projectsList.map(item => (
      <div className={styles.experienceContainer}>
        <div className={flexStyles.flexRow}>
          <div className={classNames(flexStyles.flexHalfLeft)}>
            <div className={styles.listItemImageWrapper}>
              <img alt={item.projectName} src={item.img} />
            </div>
          </div>
          <div
            className={classNames(flexStyles.flexHalfRight, styles.rightHalf)}
          >
            <div className={styles.projectName}>
              {item.projectName}
              {item.projectLink && (
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(styles.projectLinkIcon)}
                >
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
              )}
            </div>
            <div className={styles.technologies}>{item.technologies}</div>
            <div className={styles.descriptions}>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    ));
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
          {this.renderProjectsList(mainList.projectList)}
        </div>
      </div>
    );
  }
});

module.exports = Projects;
