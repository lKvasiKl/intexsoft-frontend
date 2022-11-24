import React from 'react';
import Button from "../../components/UI/Button/Button";
import RegisterForm from '../../components/UI/RegisterForm/RegisterForm';

import styles from './Register.module.scss';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginWrapper}>
            <span className={styles.companyName}>
                SLIDE
            </span>
                <div className={styles.login}>
                    <h2 className={styles.subtitle}>
                        Already have an account?
                    </h2>
                    <div className={styles.line}/>
                    <p className={styles.text}>
                        Sign in and view photos from millions of users.
                    </p>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button theme='light'>Sign in</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.registerWrapper}>
                <div className={styles.register}>
                    <h2 className={styles.subtitle}>
                        Sign up
                    </h2>
                    <div className={styles.line}/>
                    <RegisterForm
                        formTheme='dark'
                        buttonTheme='dark'
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;