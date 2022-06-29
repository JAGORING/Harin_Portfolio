import React from 'react';
import styles from './Button.module.css';

const Button = ({ size, onClick, children }) => {
  return (
    <button size={size} onClick={onClick} className={`${styles[`${size}`]}`}>
      <p className={styles.btnText}>{children}</p>
      <div className={styles.btnTwo}>
        <p className={styles.btnText2}>GO!</p>
      </div>
    </button>
  );
};

export default Button;
