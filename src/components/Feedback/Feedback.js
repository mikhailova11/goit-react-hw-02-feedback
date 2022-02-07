import React from "react";
// import s from "./Feedback.module.css";

class Feedback extends React.Component {

      countTotalFeedback() {

      } 

      countPositiveFeedbackPercentage(){

      }


  render() {
    return (
    <div>
        <h3>Please leave feedback</h3>
        <div>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
        </div>
        <h3>Statics</h3>
        <div>
            <span>Good: {}</span>
            <span>Neutral: {}</span>
            <span>Bad: {}</span>
            <span>Total: {}</span>
            <span>Positive feedback: {}</span>
        </div>
    </div>
    );
  }
}

export default Feedback;

