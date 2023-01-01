import  { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
    const [modeTheme, setModeTheme] = useState(true)
    const handleModeTheme = () => {
        setModeTheme(!modeTheme)
    }

    return (
        <AppContext.Provider value={{ handleModeTheme, modeTheme }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }