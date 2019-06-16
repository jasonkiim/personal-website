const React = require('react');
const createReactClass = require('create-react-class');
const classNames = require('classnames');

const mainList = require('./list');
const styles = require('./styles/Experience.css');
const flexStyles = require('./styles/FlexStyles.css');

const ExperienceLayout = createReactClass({
  displayName: 'ExperienceLayout',
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
  renderExperienceList(experienceList) {
    return experienceList.map(item => (
      <div className={styles.experienceContainer}>
        <div className={flexStyles.flexRow}>
          <div className={classNames(flexStyles.flexHalf, styles.leftHalf)}>
            {item.img}
          </div>
          <div className={classNames(flexStyles.flexHalf, styles.rightHalf)}>
            {item.description_1}
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
          {this.renderExperienceList(mainList.experienceList)}
        </div>
      </div>
    );
  }
});

module.exports = ExperienceLayout;
