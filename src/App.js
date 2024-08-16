import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import AppWrapper from './interface/AppWrapper';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />

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
          style: {
            maxWidth: '640px',
            color: 'var(--text-color-primary)',
            backgroundColor: 'var(--bgColor-secondary)',
            fontSize: '16px',
            fontFamily: 'var(--main-font-fam)',
            textAlign: 'center',
            letterSpacing: '1px',
            wordSpacing: '1px',
            padding: '16px 24px',
            borderRadius: '4px',
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
