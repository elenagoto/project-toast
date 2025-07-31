import React from 'react'
import { ToastContext } from '../ToastProvider'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ variant, id, children }) {
  const { dismissToast } = React.useContext(ToastContext)
  const Icon = ICONS_BY_VARIANT[variant] || Info
  const toastStyle = styles[variant] || styles.notice

  return (
    <div className={`${styles.toast} ${toastStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        type="button"
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
