import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
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
        <span className={formStyles.facebookLink}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />{context.t("페이스북으로 로그인")}
        </span>
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
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;