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
          <div className={classNames(flexStyles.flexHalf)}>
            <div className={styles.listItemImageWrapper}>
              <img alt={item.title} src={item.img} />
            </div>
          </div>
          <div className={classNames(flexStyles.flexHalf, styles.rightHalf)}>
            {item.description_1} {item.description_2}
            {item.description_3}
            {item.description_4}
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
