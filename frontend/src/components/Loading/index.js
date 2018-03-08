import React from "react";
import styles from "./styles.scss";

const Loading = props => (
    <div className={styles.container}>
        <div className={styles.spinner}>
            <div className={styles.item1}><span></span></div>
            <div className={styles.item2}><span></span></div>
            <div className={styles.item3}><span></span></div>
            <div className={styles.item4}><span></span></div>
            <div className={styles.item5}><span></span></div>
            <div className={styles.item6}><span></span></div>
            <div className={styles.item7}><span></span></div>
            <div className={styles.item8}><span></span></div>
        </div>
    </div>
);


export default Loading;