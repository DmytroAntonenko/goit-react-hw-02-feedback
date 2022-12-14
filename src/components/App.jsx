import React, {Component} from "react";

import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import css from './App.module.css';

class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
};

handleLeaveFeedback = event => {
  const name = event.currentTarget.name;
  this.setState(prevState => ({
    [name]: prevState[name] + 1,
  }));
};

countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (good / total) * 100;
    return Math.round(positiveFeedbackPercentage);
  }


render() {
  const { good, neutral, bad } = this.state;
  const options = Object.keys(this.state);
    return (
      <div className ={css.statistics}>
       <Section title="Please leave feedback">
           <FeedbackOptions
             options={options}
             onLeaveFeedback={this.handleLeaveFeedback}
             />
         </Section>

      <Section title="Statistics">
      {this.countTotalFeedback() !== 0 ? 
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      : 
        <Notification message="There is no feedback"/>
      }
      </Section>
    </div>
)}
};


export default App;

