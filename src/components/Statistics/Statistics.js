import React, {Component} from "react";
import css from "./Statistics.css";

import Notification from "../Notification/Notification";

class Statistics extends Component {

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
        return (
        <div className="Statistics">
          <h1 className="title">Plese leave feedback</h1>
          <div className="Statistics__controls">
            <button className="button" type="button" onClick={this.voteGood}>good</button>
            <button className="button" type="button" onClick={this.voteNeutral}>neutral</button>
            <button className="button" type="button" onClick={this.voteBad}>bad</button>
          </div> 
          <h2 className="title">Statistics</h2>
          {this.countTotalFeedback() !== 0 ? (
            <ul className="stat-list">
            <li className="item">
                <span className="label">good:</span>
                <span className="value">{this.state.good}</span>
            </li>
            <li className="item">
                <span className="label">neutral:</span>
                <span className="value">{this.state.neutral}</span>
            </li>
            <li className="item">
                <span className="label">bad:</span>
                <span className="value">{this.state.bad}</span>
            </li>
            <li className="item">
                <span className="label">total</span>
                <span className="value">{this.countTotalFeedback()}</span>
            </li>
            <li className="item">
                <span className="label">Positive feedback</span>
                <span className="value">{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
          ) : (
            <Notification message="There is no feedback" />
          )}
          
        </div>
    )}
    
}

export default Statistics;