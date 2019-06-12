const React = require('react');
const createReactClass = require('create-react-class');

const experienceList = require('./list');
const ExperiencePaper = require('./ExperiencePaper');

const Experience = createReactClass({
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
    return {
      <div
        className={`${
          this.state.fading
            ? 'exp-projects-container-fading'
            : 'exp-projects-container-faded'
        }`}
      >
        <div className="exp-projects-container">
          {experienceList.map((experience, i) => (
            <ExperiencePaper
              key={i}
              description_1={experience.description_1}
              description_2={experience.description_2}
              description_3={experience.description_3}
              description_4={experience.description_4}
              job={experience.job}
              image={experience.img}
              title={experience.title}
            />
          ))}
        </div>
      </div>

    }
  }

});
export default class Experience extends Component {
  state = {
    fading: true
  };

  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({ fading: false });
    }, 100);
  }

  render() {
    return (
    );
  }
}
