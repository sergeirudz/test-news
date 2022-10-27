import { Box, Container, Link, Theme, Typography } from '@mui/material';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import ArticleList from '../src/components/ArticleList';
import Form from '../src/components/Form';
import Layout from '../src/components/Layout';
import { selectAuth, selectUser } from '../src/state/slices/userSlice';

const styles = {
  container: (theme: Theme) => ({
    [theme.breakpoints.up('xs')]: {
      paddingTop: 10,
      justifyContent: 'center',
      marginBottom: 'auto',
      textAlign: 'center',
    },
  }),
  heading: (theme: Theme) => ({}),
};

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
interface Props {
  articles: Article[];
  getLayout: () => void;
}
const Home = () => {
  const user = useSelector(selectUser);
  const auth = useSelector(selectAuth);

  return (
    <>
      <Head>
        <title>News Site</title>
      </Head>

      <Container sx={styles.container}>
        {auth ? (
          <Typography component="h1" variant="h3" sx={styles.heading}>
            Logged in as {user}
          </Typography>
        ) : (
          <Typography component="h1" variant="h3" sx={styles.heading}>
            Please log in
          </Typography>
        )}

        {auth ? (
          <ArticleList />
        ) : (
          <>
            <Form />
            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" component="p">
                Please use any email and a valid NewsAPI token to log in.
              </Typography>

              <Typography variant="body1" component="p">
                To get the token please register for one at the following URL{' '}
                <Link
                  href="https://newsapi.org/register"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://newsapi.org/register
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
