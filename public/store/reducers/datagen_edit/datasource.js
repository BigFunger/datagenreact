import { handleActions } from 'redux-actions';

//TODO: Not really a datasource... Only put this here to have something to load.
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
