import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [listOfToasts, setListOfToasts] = React.useState([])

  const createToast = (variant, message) => {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    }
    setListOfToasts((prevToasts) => [...prevToasts, newToast])
  }

  const dismissToast = (id) => {
    setListOfToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id),
    )
  }

  return (
    <ToastContext.Provider
      value={{ listOfToasts, setListOfToasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
