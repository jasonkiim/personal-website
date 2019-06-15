const React = require('react');
const createReactClass = require('create-react-class');

const mainList = require('./list');
const ExperiencePaper = require('./ExperiencePaper');

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
          {mainList.experienceList.map((experience, i) => (
            <ExperiencePaper
              key={i}
              description1={experience.description_1}
              description2={experience.description_2}
              description3={experience.description_3}
              description4={experience.description_4}
              job={experience.job}
              image={experience.img}
              title={experience.title}
            />
          ))}
        </div>
      </div>
    );
  }
});

module.exports = ExperienceLayout;
