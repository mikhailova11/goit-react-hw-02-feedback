import React from "react";
// import s from "./Feedback.module.css";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    countFeedbackBad = () => {
        this.setState(( prevState) =>({
        bad: prevState.bad + 1
        }))
    }
    countFeedbackNeutral = () => {
        this.setState(( prevState) =>({
            neutral: prevState.neutral + 1
        }))
    }
    countFeedbackGood = () => {
    this.setState(( prevState) =>({
        good: prevState.good + 1
    }))
    } 

    countTotalFeedback() {
        

    } 

    countPositiveFeedbackPercentage(){

    }


  render() {
    return (
    <div>
        <h3>Please leave feedback</h3>
        <div>
            <button type="button" onClick={this.countFeedbackGood}>Good</button>
            <button type="button" onClick={this.countFeedbackNeutral}>Neutral</button>
            <button type="button" onClick={this.countFeedbackBad}>Bad</button>
        </div>
        <h3>Statics</h3>
        <div>
            <span>Good: {this.state.good}</span>
            <span>Neutral: {this.state.neutral}</span>
            <span>Bad: {this.state.bad}</span>
            <span>Total: {}</span>
            <span>Positive feedback: {}</span>
        </div>
    </div>
    );
  }
}

export default Feedback;

