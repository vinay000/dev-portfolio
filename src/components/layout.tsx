import React from 'react';
import { ThemeProvider } from './theme-provider';
import { TopNav } from './TopNav';

interface LayoutProps {
    children: React.ReactNode; // children is of type React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: 1 }}>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-transparent rounded-md">
                        <div className="w-full max-w-2xl mx-auto">
                            <TopNav />
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </main>
        </div>
    );
};

