import React from 'react'
import useEscapeKey from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [listOfToasts, setListOfToasts] = React.useState([])

  useEscapeKey(() => {
    setListOfToasts([])
  })


  // React.useEffect(() => {
  //   function handleKeyDown(e) {
  //     if (e.code === 'Escape') {
  //       setListOfToasts([])
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown)
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown)
  //   }
  // }, [])

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
