import React from "react";
import styles from "./Members.module.css";
import Header from "../Header/Header"

function Main() {
    return (
        <div className={styles.container}>
            메인
        </div>
    )
}


function Members() {
    return (
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    )
}

export default Members;