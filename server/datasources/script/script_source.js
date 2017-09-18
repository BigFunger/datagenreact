import { randomItem } from '../../lib/random_item';

export const generator = (datasource, body) => {
  const {
    detail: {
      script
    }
  } = datasource;

  return eval(script);
}

export const mapper = (datasource) => ({})
