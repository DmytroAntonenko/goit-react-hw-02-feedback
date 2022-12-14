import React, {Component} from "react";

import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
};
  
voteGood = () => {
    this.setState(prevState => {
        return {
            good: prevState.good + 1,
        }
    })
};
voteNeutral= () => {
    this.setState(prevState => {
        return {
            neutral: prevState.neutral + 1,
        }
    })
};

voteBad= () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
        
    }))
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
    return (
    <div className="Statistics">
      <h1 className="title">Plese leave feedback</h1>
      <div className="Statistics__controls">
        <button className="button" type="button" onClick={this.voteGood}>good</button>
        <button className="button" type="button" onClick={this.voteNeutral}>neutral</button>
        <button className="button" type="button" onClick={this.voteBad}>bad</button>
      </div> 
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

  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     <State/>
  //   </div>
  // );

