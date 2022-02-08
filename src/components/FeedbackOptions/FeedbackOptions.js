import React from "react";
// import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({good, neutral, bad}) => {
    return (
        <div>
            <button type="button" onClick={good}>Good</button>
            <button type="button" onClick={neutral}>Neutral</button>
            <button type="button" onClick={bad}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;