import React from "react";
// import s from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total }) => {
    return (
        <div>
            <div>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feedback: {}</span>
            </div>
        </div>
    )
}

export default Statistics;