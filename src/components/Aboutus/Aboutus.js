import React from "react";
import styles from "./Aboutus.module.css";
import Header from "../Header/Header"

function Main() {
    return (
        <div className={styles.container}>
            메인
        </div>
    )
}
function Aboutus() {
    return (
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    )
}

export default Aboutus;