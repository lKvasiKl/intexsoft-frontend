import React from 'react';
//import {Link} from 'react-router-dom';
import Input from '../Input/Input';
import PasswordInput from '../PasswordInput/PasswordInput';
import Button from '../Button/Button';

import styles from './RegiterForm.module.scss';

const RegisterForm = ({buttonTheme, formTheme}) => {
    const [form, setForm] = React.useState({});

    const handleChangeForm = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    theme={formTheme}
                    onChange={handleChangeForm}
                />
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    theme={formTheme}
                    onChange={handleChangeForm}
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    theme={formTheme}
                    onChange={handleChangeForm}
                />
                <PasswordInput
                    placeholder="Password"
                    theme={formTheme}
                    onChange={handleChangeForm}
                />
                <div className={styles.btnContainer}>
                    <Button
                        //TODO: onClick saveUser
                        theme={buttonTheme}
                    >
                        Sign up
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
