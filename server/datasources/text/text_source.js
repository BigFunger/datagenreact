import { random } from 'lodash';
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
    for (var i=0; i < datasource.length; i++) {
      characters.push(charset[random(0, charset.length-1)]);
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
      analyzer,
      search_analyzer,
      search_quote_analyzer
    }
  } = datasource;

  return {
    type,
    analyzer,
    search_analyzer,
    search_quote_analyzer
  }
}



// const datasourceMappings = {
//   date: (datasource) => {
//     const { type } = datasource;
//     return { type };
//   },
//   keyword: (datasource) => {
//     const { type } = datasource;
//     return { type };
//   },
//   number: (datasource) => {
//     const {
//       detail: {
//         type
//       }
//     } = datasource;
//     const scalingFactor = numberType === 'scaled_float' ? datasource.scalingFactor : undefined;

//     return {
//       type,
//       scalingFactor
//     };
//   },
//   text: (datasource) => {
//     const {
//       type,
//       detail: {
//         analyzer,
//         search_analyzer,
//         search_quote_analyzer
//       }
//     } = datasource;

//     return {
//       type,
//       analyzer,
//       search_analyzer,
//       search_quote_analyzer
//     }
//   }
// };