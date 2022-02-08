import React from "react";
import Statistics from "../Statistics";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
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
            <Section title="Please leave feedback"/>
            <FeedbackOptions  
            good={this.countFeedbackGood} 
            bad={this.countFeedbackBad} 
            neutral={this.countFeedbackNeutral}/>

            <Section title="Statics"/>
            <Statistics 
            // positivePercentage={this.countPositiveFeedbackPercentage} 
            // total={this.countTotalFeedback} 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} />
        </div>

    );
  }
}

export default Feedback;

