import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";


export const LoginForm = props => (
    <div className={styles.formComponent}>
        <form className={styles.form}>
            <input type="text" placeholder="아이디" className={styles.textInput} />
            <input type="password" placeholder="패스워드" className={styles.textInput} />
            <input type="submit" value="로그인" className={styles.button} />
        </form>
        <span className={styles.divider}>혹은</span>
        <span className={styles.facebookLink}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />페이스북으로 로그인
        </span>
        <span className={styles.forgotLink}>패스워드를 잊었다면</span>
    </div>
);

export const SignupForm = props => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>친구들에게 사진과 영상을 공유하세요.</h3>
        <botton className={styles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
                페이스북으로 로그인
        </botton>
        <span className={styles.divider}>혹은</span>
        <form className={styles.form}>
            <input type="email" placeholder="전자우편" className={styles.textInput} />
            <input type="text" placeholder="이름" className={styles.textInput} />
            <input type="username" placeholder="아이디" className={styles.textInput} />
            <input type="password" placeholder="패스워드" className={styles.textInput} />
            <input type="submit" value="가입" className={styles.button} />
        </form>
        <p className={styles.terms}>
            가입 시 <span>이용약관 및 개인 정보 취약 방침</span>에 동의하게 됩니다.
        </p>
    </div>
);