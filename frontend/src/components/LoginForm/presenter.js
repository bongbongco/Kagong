import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import FacebookLogin from "react-facebook-login";
import formStyles from "components/shared/formStyles.scss";


const LoginForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input type="text" 
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
                value={props.passwordVaule}
            />
            <input type="submit" value={context.t("로그인")} className={formStyles.button} />
        </form>
        <span className={formStyles.divider}>{context.t("혹은")}</span>
        <FacebookLogin
            appId="347447349088214"
            autoLoad={true}
            fields="name, email, picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
            textButton={context.t("페이스북으로 로그인")}
        />
        <span className={formStyles.forgotLink}>{context.t("패스워드를 잊었다면")}</span>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

LoginForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

export default LoginForm;