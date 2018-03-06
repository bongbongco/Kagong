import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";


export const LoginForm = (props, context) => (
    <div className={styles.formComponent}>
        <form className={styles.form}>
            <input type="text" placeholder={context.t("아이디")} className={styles.textInput} />
            <input type="password" placeholder={context.t("패스워드")} className={styles.textInput} />
            <input type="submit" value={context.t("로그인")} className={styles.button} />
        </form>
        <span className={styles.divider}>{context.t("혹은")}</span>
        <span className={styles.facebookLink}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />{context.t("페이스북으로 로그인")}
        </span>
        <span className={styles.forgotLink}>{context.t("패스워드를 잊었다면")}</span>
    </div>
);

export const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>{context.t("친구들에게 사진과 영상을 공유하세요.")}</h3>
        <botton className={styles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
                {context.t("페이스북으로 로그인")}
        </botton>
        <span className={styles.divider}>{context.t("혹은")}</span>
        <form className={styles.form}>
            <input type="email" placeholder={context.t("전자우편")} className={styles.textInput} />
            <input type="text" placeholder={context.t("이름")} className={styles.textInput} />
            <input type="username" placeholder={context.t("아이디")} className={styles.textInput} />
            <input type="password" placeholder={context.t("패스워드")} className={styles.textInput} />
            <input type="submit" value={context.t("가입")} className={styles.button} />
        </form>
        <p className={styles.terms}>
            {context.t("동의 후 가입")}<br/> 
            <span>{context.t("이용약관 및 개인정보 처리방침")}</span>
        </p>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};
SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};