import { randomItem } from '../../lib/random_item';

export const generator = (datasource, body) => {
  const {
    field,
    detail: {
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
  const { type } = datasource;
  return { type };
}
