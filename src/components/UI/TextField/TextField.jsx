import React, {useMemo, useRef, useState} from 'react'
import classNames from 'classnames';
import {BsEye, BsEyeSlash} from 'react-icons/bs';

import styles from './TextField.module.scss';

const TextField = (props) => {
    const {className, type, placeholder, ...otherProps} = props;

    const [inputFocused, setInputFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputRef = useRef(null);
    const inputType = useMemo(() =>
            (type === "text" ? type : passwordVisible ? "text" : type),
        [passwordVisible, type]
    );

    const handleEyeIconClick = event => {
        event.stopPropagation();
        setPasswordVisible(prevState => !prevState);
    };

    const handleTextFieldClick = () => {
        setInputFocused(true);
        inputRef.current?.focus();
    };

    const handleInputFocus = event => {
        if (props.onFocus) {
            props.onFocus(event);
        }
        setInputFocused(true);
    }

    const handleInputBlur = event => {
        if (props.onFocus) {
            props.onFocus(event);
        }
        setInputFocused(false);
    }

    return (
        <div className={classNames(className, styles.textFieldWrapper)}>
            <span className={classNames(styles.inputWrapper, {
                [styles.focused]: inputFocused,
                [styles.filled]: props.value || inputRef.current?.value
            })}
                  onClick={handleTextFieldClick}>
                <label className={styles.label}>{placeholder}</label>
                <div className={styles.inputContainer}>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        type={inputType}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        {...otherProps} />
                </div>
                {type === "password" && (
                    <span onClick={handleEyeIconClick} className={styles.eyeIcon}>
                        {passwordVisible ? <BsEye/> : <BsEyeSlash/>}
                    </span>
                )}
            </span>
        </div>
    )
};

export default TextField;