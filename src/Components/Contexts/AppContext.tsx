import { useState, createContext, useContext } from "react"

type Theme = 'light' | 'dark'
type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania' | 'all';

interface AppContextType {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  currRegion: Region
  setCurrRegion: React.Dispatch<React.SetStateAction<Region>>
}

export const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({ children }: { children: React.ReactNode } ) => {
  

  const [theme, setTheme] = useState<Theme>('light');
  const [currRegion, setCurrRegion] = useState<Region>('all')


  return ( 
    <AppContext.Provider 
      value={{
        theme,
        setTheme,
        currRegion,
        setCurrRegion
      }}
      >
        {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
    return context
}

