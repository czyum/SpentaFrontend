import React from 'react';
import styles from './FormElement.module.css';
const FormElement = (props) => {
    return (
        <div className={styles.formElement}>
            {props.children}
        </div>
    )
}

export default FormElement;
