import PersistentDrawerLeft from "@/components/LeftBarNavigation";
import "@/styles/globals.css";
import isPropValid from "@emotion/is-prop-valid";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyleSheetManager } from "styled-components";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
    },
});

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <>
        <StyleSheetManager shouldForwardProp={isPropValid} disableVendorPrefixes={false}>
          <ThemeProvider theme={theme}>
            <>
            <Component {...pageProps} />
            </>
          </ThemeProvider>
        </StyleSheetManager>
      </>
    </AppCacheProvider>
  )
}
