import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import LoginForm from '../../components/UI/LoginForm/LoginForm';

import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginWrapper}>
                <span className={styles.companyName}>
                    SLIDE
                </span>
                <div className={styles.login}>
                    <Logo className={styles.logo}/>
                    <h2 className={styles.subtitle}>
                        Sign in to Account
                    </h2>
                    <div className={styles.line}/>
                    <LoginForm
                        formTheme='light'
                        buttonTheme='light'
                    />
                </div>
            </div>
            <div className={styles.register}>
                <h2 className={styles.subtitle}>Welcome to Slide!</h2>
                <div className={styles.line}/>
                <p className={styles.text}>
                    Don't have an account?
                    Sign up to discover the wonderful world of photography.
                </p>
                <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button theme='dark'>Sign up</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;