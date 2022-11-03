import React, {useMemo, useState} from 'react'
import classNames from 'classnames';
import {BsEye, BsEyeSlash} from 'react-icons/bs';

import styles from './TextField.module.css';

const TextField = ({...props}) => {
    const {className, type, ...otherProps} = props;

    //const [inputFocused, setInputFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputType = useMemo(() =>
            (type === "text" ? type : passwordVisible ? "text" : type),
        [passwordVisible, type]
    );

    const handleEyeIconClick = () => {
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <div className={classNames(className)}>
            <span className={classNames(styles.inputWrapper)}>
                <div className={styles.inputContainer}>
                    <input
                        className={classNames(
                            className,
                            styles.input
                        )}
                        type={inputType}
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