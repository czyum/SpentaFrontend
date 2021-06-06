import React from 'react';
import styles from './FormLabel.module.css';
const FormLabel = (props) => {
    return (
        <div className={styles.formLabel}>
            <p >{props.name}</p>
        </div>
    )
}

export default FormLabel;
