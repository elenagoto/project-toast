import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [listOfToasts, setListOfToasts] = React.useState([]);
  
  function createToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setListOfToasts((prevToasts) => [...prevToasts, newToast]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={listOfToasts} handleToastsDismiss={setListOfToasts} />

      <form className={styles.controlsWrapper} onSubmit={(e) => {
        e.preventDefault();
        createToast(variant, message);
        setMessage('');
      }}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} className={styles.messageInput} onChange={(event) => {
              setMessage(event.target.value);
            }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

          { VARIANT_OPTIONS.map((option) => (
            <label key={option} htmlFor={`variant-${option}`}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={variant === option}
                onChange={(e) => setVariant(e.target.value)}
              />
              {option}
            </label>
          ))}
            
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
