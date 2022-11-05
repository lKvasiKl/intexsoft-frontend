import React, {useState} from 'react';
import classNames from 'classnames';
import { AiOutlineLike } from 'react-icons/ai';

import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
    const {label, ...otherProps} = props;

    const [checked, setChecked] = useState(props.checked ?? false);

    const handleCheckboxClick = event => {
        if (props.onChange) {
            props.onChange(event);
        }
        setChecked(prevState => !prevState);
    };

    return (
        <div className={classNames(styles.checkboxWrapper, {
            [styles.checked]: checked
        })}
        >
            <label className={styles.label}>
                <input
                    className={styles.input}
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    checked={checked}
                    {...otherProps}
                />
                <span className={styles.checkbox}>
                    <AiOutlineLike />
                </span>
                {label ?? ""}
            </label>
        </div>
    );
};

export default Checkbox;