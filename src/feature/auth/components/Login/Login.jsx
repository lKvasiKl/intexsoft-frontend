import React from 'react';
import classNames from 'classnames';
import Logo from '../../../../components/Logo';
import Button from "../../../../components/UI/Button";
import LoginForm from '../LoginForm';

import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginWrapper}>
                <span className={styles.companyName}>SLIDE</span>
                <div className={styles.login}>
                    <Logo className={styles.logo}/>
                    <h2 className={styles.subtitle}>Sign in to Account</h2>
                    <div className={styles.line}/>
                    <LoginForm />
                </div>
            </div>
            <div className={styles.register}>
                <h2 className={styles.subtitle}>Welcome to Slide!</h2>
                <div className={styles.line}/>
                <p className={styles.text}>Don't have an account?<br/>Sign up to discover the wonderful world of photography.</p>
                <Button className={styles.btnRegister}>
                    Sign up
                </Button>
            </div>
        </div>
    )
}

export default Login;