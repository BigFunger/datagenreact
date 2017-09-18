import { randomItem } from '../../lib/random_item';

export const generator = (datasource, body) => {
  const {
    detail: {
      field,
      method,
      values,
      charset,
      length
    }
  } = datasource;

  if (method === 'values') {
    const item = randomItem(values.split('\n'));
    return {
      ...body,
      [field]: item
    };
  }

  if (method === 'random') {
    const characters = [];
    for (var i=0; i < length; i++) {
      characters.push(randomItem(charset));
    }
    const item = characters.join('');
    return {
      ...body,
      [field]: item
    };
  }
}

export const mapper = (datasource) => {
  const {
    type,
    detail: {
      field,
      analyzer,
      search_analyzer,
      search_quote_analyzer
    }
  } = datasource;

  return {
    [field]: {
      type,
      analyzer,
      search_analyzer,
      search_quote_analyzer
    }
  }
}
