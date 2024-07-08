"use client"

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import '@/styles/globals.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/utils/theme';

// export const metadata = {
//     title: 'Promptopia',
//     description: 'Discover & share AI prompts'
// }

const RootLayout = ({ children }) => {
    // Theme state
    const [theme, setTheme] = useState(lightTheme);

    // Theme toggler
    const toggleTheme = (theme) => {
        console.log(theme);
        setTheme(theme);
    };

    return (
        <html lang='en'>
            <body>

                <ThemeProvider theme={theme}>
                    <Provider>
                        <div className="main">
                            <div className="gradient" />
                        </div>
                        <main className={`app ${theme.colors.bg}`}>
                            <Nav toggleTheme={toggleTheme}/>
                            {children}
                        </main>

                    </Provider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout