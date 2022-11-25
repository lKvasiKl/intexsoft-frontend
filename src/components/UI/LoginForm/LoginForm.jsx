import React from 'react';
//import {Link} from 'react-router-dom';
//import {validationSchema} from './validationSchema';
import Input from '../Input/Input';
import PasswordInput from '../PasswordInput/PasswordInput';
import Checkbox from '../Chackbox/Checkbox';
import Button from '../Button/Button';

import styles from './LoginForm.module.scss';

const LoginForm = ({buttonTheme, formTheme}) => {
    const [form, setForm] = React.useState({});

    const handleChangeForm = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const handleCheckUser = () => {
        alert(JSON.stringify(form))
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
                <PasswordInput
                    placeholder="Password"
                    theme={formTheme}
                    onChange={handleChangeForm}
                />
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
                    <Button
                        theme={buttonTheme}
                        onClick={handleCheckUser}>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
