import styles from "../assets/styles/title.module.css"
import React from "react"

export const TitleHeader = () => {
    return <>
        <section className={styles['title-header']}>
            <h1>To do App</h1>
        </section>
    </>
}