import { useMemo, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import breakpoints from './breakpoints';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loading from '../components/Loading';

// ----------------------------------------------------------------------

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  let persistor = persistStore(store);

  const themeOptions: any = useMemo(
    () => ({
      // palette,
      // typography,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </MUIThemeProvider>
  );
}
