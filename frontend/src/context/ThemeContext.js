import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: 'light', undefined })

export const ThemeProvider = ({children}) => {
  
  const localTheme = localStorage.getItem('theme')
  
  const [theme, setTheme] = useState(localTheme ? localTheme : 'light')

  return <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
  </ThemeContext.Provider>
}