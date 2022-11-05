import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Button.module.scss';

const Button = ({children, onClick, ...props}) => {
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