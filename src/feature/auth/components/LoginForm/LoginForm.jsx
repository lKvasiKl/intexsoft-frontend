import React from 'react';
import {Link} from 'react-router-dom';
import TextField from "../../../../components/UI/TextField";
import Checkbox from "../../../../components/UI/Chackbox";
import Button from "../../../../components/UI/Button";

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <TextField type="email" placeholder="Email"/>
                <TextField type="password" placeholder="Password"/>
                <div className={styles.utilsContainer}>
                    <Checkbox
                        label="Remember me"
                    />
                    {/*label заменить на <Link to={route}*/}
                    <label className={styles.link}>
                        Forgot password?
                    </label>
                </div>
                <div className={styles.btnContainer}>
                    <Button className={styles.btnSignIn}>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
