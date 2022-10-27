import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ArticleState {
  author: string;
  content: string;
  publishedAt: string;
  source: {
    id: null | number;
    name: string;
  };
  title: string;
  url: string;
}

const initialState: ArticleState = {
  author: '',
  content: '',
  publishedAt: '',
  source: {
    id: null,
    name: '',
  },
  title: '',
  url: '',
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    article: (state, action) => {
      state.author = action.payload.author;
      state.content = action.payload.content;
      state.publishedAt = action.payload.publishedAt;
      state.source = action.payload.source;
      state.title = action.payload.title;
      state.url = action.payload.url;
    },
  },
});

export const { article } = articleSlice.actions;
export const selectArticle = (state: RootState) => state.article;

export const selectAuthor = (state: RootState) => state.article.author;
export const selectContent = (state: RootState) => state.article.content;
export const selectPublishedAt = (state: RootState) =>
  state.article.publishedAt;
export const selectSource = (state: RootState) => state.article.source;
export const selectTitle = (state: RootState) => state.article.title;
export const selectUrl = (state: RootState) => state.article.url;

export default articleSlice.reducer;
