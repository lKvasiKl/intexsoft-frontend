import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import styles from './Button.module.scss';

const BUTTON_THEME = {
    dark: styles.dark,
    light: styles.light
};

const Button = ({children, onClick, theme, ...props}) => {
    const {...otherProps} = props;

    return (
        <button
            onClick={onClick}
            className={classNames(styles.button,
                BUTTON_THEME[theme])}
            {...otherProps}>
            {children}
        </button>
    );
};

Button.propTyps = {
    onClick: PropTypes.func
};

export default Button;