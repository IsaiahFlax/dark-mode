import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = (mode) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', mode)

    useEffect(() => {
        darkMode
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode");
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;