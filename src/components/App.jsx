import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    return Math.round(this.state.good / total * 100);
  }

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  }

  render () {
    const options = ["good", "neutral", "bad"];
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {
            total === 0 
              ? 
              <Notification message="There is no feedback"/>
              :
              <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
          }
        </Section>
      </>
    );
  }
}

export default App;