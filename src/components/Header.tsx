import { AppBar, Box, Stack, Theme, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextLink from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth, selectUser } from '../state/slices/userSlice';
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

const styles = {
  appBar: (theme: Theme) => ({
    backdropFilter: 'blur(30px)',
    boxShadow: 1,
  }),

  stackBar: (theme: Theme) => ({
    backgroundColor: 'white',
    height: 50,
  }),

  menuLink: (theme: Theme) => ({
    cursor: 'pointer',
    color: 'black',
    fontWeight: 800,
  }),

  accountIcon: (theme: Theme) => ({
    cursor: 'pointer',
  }),
};

const Header: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const auth = useSelector(selectAuth);
  const router = useRouter();

  const handleLogout = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logout());
    Cookies.remove('loggedIn');
    router.push('/');
  };

  return (
    <AppBar position="fixed" sx={styles.appBar} elevation={0} component="nav">
      {/* {!!isDesktop ? <div>DESKTOP MENU</div> : <div>MOBILE MENU</div>} */}
      <Stack
        sx={styles.stackBar}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        {/*//! Profile link PROTECTED */}

        {auth ? (
          <>
            <NextLink href="/" passHref>
              <Typography variant="h6" component="span" sx={styles.menuLink}>
                Articles
              </Typography>
            </NextLink>

            <Typography
              variant="h6"
              component="span"
              sx={styles.menuLink}
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </Typography>
            <NextLink href="/profile" passHref>
              <Typography variant="h6" component="span" sx={styles.menuLink}>
                Profile
              </Typography>
              {/* <AccountCircleIcon color="primary" sx={styles.accountIcon} /> */}
            </NextLink>
          </>
        ) : null}
      </Stack>
    </AppBar>
  );
};

export default Header;
