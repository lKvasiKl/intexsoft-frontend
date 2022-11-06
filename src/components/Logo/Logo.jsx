import React from 'react';
import classNames from 'classnames';
import Logotype from '../../assets/images/Slide-logo.png';

import style from './Logo.module.scss';

const Logo = props => {
    const {className, ...otherProps} = props;

    return (
        <div className={style.logoWrapper}>
            <img className={classNames(
                className,
                style.logo
            )}
                 alt="Logo"
                 src={Logotype}
                 {...otherProps}
            />
        </div>
    );
};

export default Logo;