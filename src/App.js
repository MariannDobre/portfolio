import { Toaster } from 'react-hot-toast';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { useContext } from 'react';
import AppWrapper from './interface/AppWrapper';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />

      <ThemedToaster />
    </ThemeProvider>
  );
}

function ThemedToaster() {
  const { theme } = useContext(ThemeContext);

  const toasterStyles = {
    maxWidth: '640px',
    color: `${theme === 'light' ? '#020617' : '#ede9fe'}`,
    backgroundColor: `${theme === 'light' ? '#fafafa' : '#0d0d0e'}`,
    border: 'none',
    outline: `1px solid ${theme === 'light' ? '#9ca3af' : '#525252'}`,
    fontSize: '16px',
    fontFamily: 'var(--main-font-fam)',
    textAlign: 'center',
    letterSpacing: '1px',
    wordSpacing: '1px',
    padding: '16px 24px',
    borderRadius: '4px',
  };

  return (
    <Toaster
      position='top-center'
      gutter={12}
      toastOptions={{
        success: {
          duration: 3750,
        },
        error: {
          duration: 5000,
        },
        style: toasterStyles,
      }}
    />
  );
}

export default App;
