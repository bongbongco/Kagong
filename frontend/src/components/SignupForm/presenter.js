import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import Ionicon from "react-ionicons";
import formStyles from "components/shared/formStyles.scss";


const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t("친구들에게 사진과 영상을 공유하세요.")}</h3>
        <FacebookLogin
            appId="347447349088214"
            autoLoad={true}
            field="name, email, picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookButton}
            icon="fa-facebook-official"
            textButton={context.t("페이스북으로 로그인")}
        />
        <span className={formStyles.divider}>{context.t("혹은")}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input type="email" 
                placeholder={context.t("전자우편")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                name="email"
                value={props.emailValue}
            />
            <input type="text" 
                placeholder={context.t("이름")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                name="fullname"
                value={props.fullnameValue}
            />
            <input type="username" 
                placeholder={context.t("아이디")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                name="username"
                value={props.usernameValue}
            />
            <input type="password" 
                placeholder={context.t("패스워드")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                name="password"
                value={props.passwordValue}
            />
            <input type="submit" 
                value={context.t("가입")} 
                className={formStyles.button} 
            />
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

SignupForm.PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

export default SignupForm;