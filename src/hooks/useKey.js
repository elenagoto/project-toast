import React from 'react';

function useKey(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key || event.key === key) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key,callback]);
}

export default useKey;