import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Button.module.css';

const Button = ({children, onClick, outline, ...props}) => {
    const {className, ...otherProps} = props;

    return (
        <button
            onClick={onClick}
            className={classNames(
                className,
                style.button
            )}
            {...otherProps}>
            {children}
        </button>
    );
};

Button.propTyps = {
    onClick: PropTypes.func
};

export default Button;