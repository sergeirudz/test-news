import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Theme,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../state/slices/userSlice';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';

const styles = {
  container: (theme: Theme) => ({
    padding: 3,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
  }),
};

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const auth = useSelector(selectAuth);

  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }} justifyContent="center" alignItems="center">
        <Container component="main" sx={styles.container}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
