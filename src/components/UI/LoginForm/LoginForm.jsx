import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../../hooks/useAuth';
import Input from '../Input/Input';
import PasswordInput from '../PasswordInput/PasswordInput';
import Checkbox from '../Chackbox/Checkbox';
import Button from '../Button/Button';

import styles from './LoginForm.module.scss';

const LoginForm = ({buttonTheme, formTheme}) => {
    const [form, setForm] = React.useState({});
    const navigate = useNavigate();
    const {logIn} = useAuth();

    const handleChangeForm = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const handleCheckUser = async () => {
        try {
            await logIn(form);
            navigate("/home");
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}
                  onSubmit={handleCheckUser}>
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
                    <Button theme={buttonTheme}>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
