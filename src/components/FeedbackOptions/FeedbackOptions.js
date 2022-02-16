import React from "react";
import s from "./FeedbackOptions.module.css";


const FeedbackOptions = ({good, neutral, bad}) => {
    return (
        <div className={s.listBtn}  >
            <button className={s.button} type="button" onClick={good} >Good</button>
            <button className={s.button} type="button" onClick={neutral}>Neutral</button>
            <button className={s.button} type="button" onClick={bad}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;
