const React = require('react');
const createReactClass = require('create-react-class');
const classNames = require('classnames');

const mainList = require('./list');
const styles = require('./styles/Experience.module.css');
const flexStyles = require('./styles/FlexStyles.module.css');

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
          <div className={classNames(flexStyles.flexHalfLeft)}>
            <div className={styles.listItemImageWrapper}>
              <img alt={item.title} src={item.img} />
            </div>
          </div>
          <div
            className={classNames(flexStyles.flexHalfRight, styles.rightHalf)}
          >
            <div className={styles.companyName}>{item.companyName}</div>
            <div className={styles.jobTitle}>
              <span>{item.jobTitle}</span>
              <span className={styles.fromTo}>{item.fromTo}</span>
            </div>
            <div className={styles.descriptions}>
              <p>{item.description_1}</p>
              <br />
              <p>{item.description_2}</p>
              <br />
              <p>{item.description_3}</p>
              <br />
              <p>{item.description_4}</p>
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
          {this.renderExperienceList(mainList.experienceList)}
        </div>
      </div>
    );
  }
});

module.exports = ExperienceLayout;
