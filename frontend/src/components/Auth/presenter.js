import React from "react";
import styles from "./styles.scss"
import { LoginForm, SignupForm } from "components/AuthForms";


const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/little-girl.jpg")} alt="start study"/>
        </div>
        <div className={styles.column}>
            <div className={`${styles.whiteBox}  ${styles.formBox}`}>
                <img src={require("images/logo.png")} alt="Logo" />
                {props.action === "login" && <LoginForm />}
                {props.action === "signup" && <SignupForm />}
            </div>
            <div className={styles.whiteBox}>
                {props.action === "signup" && (
                    <p>
                        이미 가입하셨나요?{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.changeAction}
                            >
                            로그인
                        </span>
                    </p>
                )}
                {props.action === "login" && (
                    <p className={styles.text}>
                        아직 가입하지 않으셨나요?{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.changeAction}
                            >
                            가입
                        </span>
                    </p>
                )}
            </div>
            <div className={styles.appBox}>
                <span>
                    앱 설치하기
                </span>
                <div className={styles.appstores}>
                    <img
                        src={require("images/ios.png")}
                        alt="Download it on the Apple Appstore"
                        />
                    <img
                        src={require("images/android.png")}
                        alt="Download it on the Google Playstore"
                        />
                </div>
            </div>
        </div>
    </main>
);


export default Auth;