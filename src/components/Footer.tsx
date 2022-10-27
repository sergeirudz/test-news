import { Box, Container, Theme } from '@mui/material';
import Logo from './Logo';

const styles = {
  footer: (theme: Theme) => ({
    [theme.breakpoints.up('xs')]: {
      background: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      marginTop: 'auto',
      marginBottom: 0,
    },
  }),
  container: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer} component="footer">
      <Container disableGutters sx={styles.container}>
        <Logo />
      </Container>
    </Box>
  );
};

export default Footer;
