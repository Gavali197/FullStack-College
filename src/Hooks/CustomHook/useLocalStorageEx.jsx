import React from 'react'
import useLocalStorage from './useLocalStorage'

function useLocalStorageEx() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>useLocalStorageEx</div>
  )
}

export default useLocalStorageEx