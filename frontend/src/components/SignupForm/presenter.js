import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>{
      context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <FacebookLogin
      appId="178583662750335"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon={"fa-facebook-official"}
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.divider}>{context.t("or")}</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        placeholder={context.t("Email")}
        className={formStyles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={context.t("Full Name")}
        className={formStyles.textInput}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        type="username"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value={context.t("Sign up")}
        className={formStyles.button}
        onChange={props.handleInputChange}
      />
    </form>
    <p className={formStyles.terms}>
      {context.t("By signing up, you agree to our Terms & Privacy Policy.")}
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isReuqired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default SignupForm;
