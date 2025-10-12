import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Colors, Lightheme, Darktheme } from '@/utils/Colors';

export type ThemeType = 'light' | 'dark' | 'default';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    colors: typeof Colors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('default');

    const getColors = () => {
        switch (theme) {
            case 'light':
                return Lightheme;
            case 'dark':
                return Darktheme;
            default:
                return Colors;
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, colors: getColors() }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
