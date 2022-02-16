import React from "react";
import Statistics from "../Statistics";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Notification from '../Notification';
import s from "./Feedback.module.css";
import PropTypes from "prop-types";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    };
    
    countFeedbackBad = () => {
         return this.setState(( prevState) =>({
        bad: prevState.bad + 1,
        
        }))
    }
    countFeedbackNeutral = () => {
        return this.setState(( prevState) =>({
            neutral: prevState.neutral + 1
        }))
    }
    countFeedbackGood = () => {
        return this.setState(( prevState) =>({
             good: prevState.good + 1
        }))
    } 

    countTotalFeedback = () => {
        const { good, neutral, bad} = this.state;
        return  good + neutral + bad
    } 

    countPositiveFeedbackPercentage= () => {
        const {good} = this.state;

        if(!good){
            return 0;
        }
        return ((good*100)/this.countTotalFeedback()).toFixed(0)
    }


  render() {
      const {good, neutral, bad} = this.state
      
      
    return (
        <div className={s.container}>
            <Section title="Please leave feedback"/>
            <FeedbackOptions       
            good={this.countFeedbackGood} 
            bad={this.countFeedbackBad} 
            neutral={this.countFeedbackNeutral}
            />


            <Section title="Statics"/>
            {good || neutral || bad 
            ?<Statistics 
                positivePercentage={this.countPositiveFeedbackPercentage} 
                total={this.countTotalFeedback} 
                good={good} 
                neutral={neutral} 
                bad={bad} />

            : <Notification message="There is no feedback"/>}
            

        </div>

    );
  }
}

export default Feedback;

