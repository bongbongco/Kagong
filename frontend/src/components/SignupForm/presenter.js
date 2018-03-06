import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "components/shared/formStyles.scss";


const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t("친구들에게 사진과 영상을 공유하세요.")}</h3>
        <botton className={formStyles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
                {context.t("페이스북으로 로그인")}
        </botton>
        <span className={formStyles.divider}>{context.t("혹은")}</span>
        <form className={formStyles.form}>
            <input type="email" placeholder={context.t("전자우편")} className={formStyles.textInput} />
            <input type="text" placeholder={context.t("이름")} className={formStyles.textInput} />
            <input type="username" placeholder={context.t("아이디")} className={formStyles.textInput} />
            <input type="password" placeholder={context.t("패스워드")} className={formStyles.textInput} />
            <input type="submit" value={context.t("가입")} className={formStyles.button} />
        </form>
        <p className={formStyles.terms}>
            {context.t("동의 후 가입")}<br/> 
            <span>{context.t("이용약관 및 개인정보 처리방침")}</span>
        </p>
    </div>
);

SignupForm.contextTypes = {
    t: PropTypes.func.PropTypes
};

export default SignupForm;