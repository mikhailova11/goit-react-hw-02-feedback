import React from "react";
import s from './Section.module.css'

const Section = ({title}) => {
    return (
        <section className={s.section}>
            <h3 className={s.title}>{title}</h3>
        </section>

    )
}

export default Section;