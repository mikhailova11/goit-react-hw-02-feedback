import React from "react";
import s from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total }) => {
    return (
        <div className={s.listText}>
                <span className={s.text}>Good: {good}</span>
                <span className={s.text}>Neutral: {neutral}</span>
                <span className={s.text}>Bad: {bad}</span>
                <span className={s.text}>Total: {total}</span>
                <span className={s.text}>Positive feedback: {}</span>
        </div>
    )
}

export default Statistics;