import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import { Article } from '../../pages';
import SearchIcon from '@mui/icons-material/Search';
import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../state/slices/userSlice';

import Router, { withRouter } from 'next/router';
import { article } from '../state/slices/articleSlice';

const styles = {
  /* //! Search */
  paper: (theme: Theme) => ({
    padding: '2px 4px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
  }),
  inputBase: (theme: Theme) => ({
    width: '85%',
    paddingLeft: 1,
  }),
  iconButton: (theme: Theme) => ({
    // padding: 1,
    marginRight: 0,
    marginLeft: 'auto',
  }),

  /* //! OTHER */

  mainContainer: (theme: Theme) => ({
    marginTop: 3,
  }),

  cardContainer: (theme: Theme) => ({
    padding: 3,
    width: {
      xs: '100%',
    },
  }),

  wrapper: (theme: Theme) => ({
    [theme.breakpoints.up('xs')]: {
      border: '1px solid red',
      paddingRight: 3,
    },
  }),

  card: (theme: Theme) => ({}),
  textWrapper: (theme: Theme) => ({
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 1,
    textAlign: 'left',
  }),
  image: (theme: Theme) => ({
    position: 'relative',
    height: '200px',
    width: '100%',
  }),
  button: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 2,
  }),
};

const ArticleList: React.FC = () => {
  const [query, setQuery] = useState('Apple');
  const [articleData, setArticleData] = useState([]);
  const dispatch = useDispatch();
  const TOKEN = useSelector(selectToken);

  useEffect(() => {
    const fetchData = async () => {
      const DATE = new Date()
        .toISOString()
        .replace(/T.*/, '')
        .split('-')
        .join('-');
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=${DATE}&sortBy=popularity&pageSize=6&page=1&apiKey=${TOKEN}`
      );

      const { articles } = await result.json();
      setArticleData(articles);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const DATE = new Date()
      .toISOString()
      .replace(/T.*/, '')
      .split('-')
      .join('-');

    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=${DATE}&sortBy=popularity&pageSize=6&page=1&apiKey=${TOKEN}`
    );

    const { articles } = await result.json();
    setArticleData(articles);
    setQuery('');
  };

  const handleRedirect = (e: SyntheticEvent, item: any) => {
    e.preventDefault();
    const {
      author,
      content,
      description,
      title,
      url,
      urlToImage,
      source,
      publishedAt,
    } = item;

    console.log('dispatch', item);
    dispatch(
      article({
        author: author,
        content: content,
        publishedAt: publishedAt,
        source: source,
        title: title,
        url: url,
      })
    );

    Router.push({ pathname: '/story' });
  };

  return (
    <Box sx={styles.mainContainer}>
      <Stack sx={styles.wrapper} justifyContent="center" alignItems="center">
        <Paper
          component="form"
          sx={styles.paper}
          onSubmit={(e: SyntheticEvent) => handleSubmit(e)}
        >
          <InputBase
            sx={styles.inputBase}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <IconButton type="submit" sx={styles.iconButton}>
            <SearchIcon />
          </IconButton>
        </Paper>

        <Grid
          sx={styles.cardContainer}
          container
          rowSpacing={4}
          columnSpacing={3}
          columns={{ xs: 4, sm: 8, md: 4 }}
        >
          {!!articleData &&
            articleData.map((item: Article, index: number) => {
              return (
                <Grid item xs={4} md={6} key={index}>
                  <Card sx={styles.card}>
                    <Box sx={styles.textWrapper}>
                      <Typography variant="h6" component="h3">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" component="p">
                        {item.description}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={styles.button}>
                      <Button onClick={(e) => handleRedirect(e, item)}>
                        Read more…
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default ArticleList;
