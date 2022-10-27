import {
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../src/components/Layout';
import { selectArticle } from '../src/state/slices/articleSlice';

const Story = () => {
  const article = useSelector(selectArticle);
  return (
    <>
      <Head>
        <title>{!!article.title && article.title}</title>
      </Head>

      <Container>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid item xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: 'center',
                pt: { xs: 6, md: 10 },
              }}
            >
              <Typography variant="h4" component="h1">
                {article.title}
              </Typography>
              <Typography variant="subtitle2">
                Written by {article.author} and published by{' '}
                {article.source.name}
              </Typography>
            </Stack>
            <Divider sx={{ mb: 6 }} />

            <Typography variant="body1" component="p">
              {article.content}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              sx={{ mt: 3 }}
            >
              <Typography variant="body2" sx={{ paddingRight: 1 }}>
                Read the original article here:
              </Typography>
              <Link
                variant="body2"
                href={article.url}
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                {article.url}
              </Link>
            </Stack>

            <Divider sx={{ mt: 8 }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Story;

Story.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
