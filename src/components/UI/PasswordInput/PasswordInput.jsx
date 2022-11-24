import React, {useState} from 'react'
import Input from "../Input/Input";
import {BsEye, BsEyeSlash} from 'react-icons/bs';

import styles from './PasswordInput.module.scss';
import classNames from "classnames";

const ICON_THEME = {
    dark: styles.dark,
    light: styles.light
};

const PasswordPostfix = ({isVisible, theme, onClick}) => {
    return (
        <span
            onClick={onClick}
            className={classNames(styles.eyeIcon, ICON_THEME[theme])}
        >
            {isVisible ? <BsEye/> : <BsEyeSlash/>}
        </span>
    );
};

const PasswordInput = ({placeholder, theme, onChange}) => {
    const [isVisible, setPasswordVisible] = useState(false);

    const handleEyeIconClick = event => {
        event.stopPropagation();
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <>
            <span className={styles.inputWrapper}>
                <Input
                    type={isVisible ? "text" : "password"}
                    name="password"
                    placeholder={placeholder}
                    theme={theme}
                    onChange={onChange}
                />
                <PasswordPostfix
                    isVisible={isVisible}
                    theme={theme}
                    onClick={handleEyeIconClick}
                />
            </span>
        </>
    )
};

export default PasswordInput;