import React, {useRef, useState} from 'react'
import classNames from 'classnames';

import styles from './Input.module.scss';

const INPUT_THEME = {
    dark: styles.dark,
    light: styles.light
};

const Input = ({type, name, placeholder, onChange, ...props}) => {
    const {theme, onFocus, ...otherProps} = props;

    const [inputFocused, setInputFocused] = useState(false);

    const inputRef = useRef(null);

    const handleChange = (event) => {
        const value = event.target.value;
        onChange({name, value});
    }

    const handleTextFieldClick = () => {
        setInputFocused(true);
        inputRef.current?.focus();
    };

    const handleInputFocus = (event) => {
        if (onFocus) {
            onFocus(event);
        }
        setInputFocused(true);
    }

    const handleInputBlur = (event) => {
        if (onFocus) {
            onFocus(event);
        }
        setInputFocused(false);
    }

    return (
        <div className={classNames(
            styles.textFieldWrapper,
            INPUT_THEME[theme])}
        >
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
                        type={type}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChange={handleChange}
                        {...otherProps}
                    />
                </div>
            </span>
        </div>
    )
};

export default Input;