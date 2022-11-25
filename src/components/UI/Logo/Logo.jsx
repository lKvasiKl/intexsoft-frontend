import React from 'react';
import classNames from 'classnames';
import logotype from '../../../assets/images/Slide-logo.png';

import styles from './Logo.module.scss';

const Logo = (size, props) => {
    const {...otherProps} = props;

    return (
        <div className={styles.logoWrapper}>
            <img className={classNames(
                styles.logo
            )}
                 alt="Logo"
                 src={logotype}
                 {...otherProps}
            />
        </div>
    );
};

export default Logo;