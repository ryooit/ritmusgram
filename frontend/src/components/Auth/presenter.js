import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss"
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Coooool app"/>
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && (
          <LoginForm />
        )}
        {props.action === "signup" && (
          <SignupForm />
        )}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            {context.t("Don't have an acoount?")}{" "}
            <span
              onClick={props.changeAction}
              className={styles.changeLink}
              >
              {context.t("Sign Up")}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            {context.t("Have an account?")}{" "}
            <span
              onClick={props.changeAction}
              className={styles.changeLink}
            >
              {context.t("Log in")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the app")}</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"/>
          <img
            src={require("images/android.png")}
            alt="Download it on the Playstore"/>
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Auth;
