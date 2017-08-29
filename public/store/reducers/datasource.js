import { handleActions } from 'redux-actions';

const defaultState = {
  id: '',
  field: '',
  method: 'random',
  length: 10,
  charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz',
  analyzer: '',
  searchAnalyzer: '',
  searchQuoteAnalyzer: ''
};

export const datasource = handleActions({

}, defaultState);
