import React from 'react'

import { ToastContext } from '../ToastProvider'
import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf() {
  const { listOfToasts, dismissToast  } = React.useContext(ToastContext)
  const toasts = listOfToasts.filter((toast) => toast.variant !== 'default')

  React.useEffect(() => {
   function dismissAllToasts(e) {
      if (e.key !== 'Escape') return    
      if (toasts.length === 0) return

          toasts.forEach((toast, index) => {
            setTimeout(() => dismissToast(toast.id), 200 * index)
          })
    }

    window.addEventListener('keydown', dismissAllToasts)
    return () => {
      window.removeEventListener('keydown', dismissAllToasts)
    }
  }, [toasts])

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
