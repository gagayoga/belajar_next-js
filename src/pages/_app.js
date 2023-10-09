import '@/styles/globals.css';
import '@mantine/core/styles.css';
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});


export default function App({ Component, pageProps }) {
  return(
    <MantineProvider 
    withGlobalStyles
    withNormalizeCSS theme={{ 
      colorSchme : 'dark',
     }}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
