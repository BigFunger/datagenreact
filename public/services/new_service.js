import { fetch } from './fetch';
import chrome from 'ui/chrome';

const apiPrefix = chrome.addBasePath('/api/kibana/datagenreact');

export const newService = {
  fetchDataplans: () => {
    return fetch.get(`${apiPrefix}/dataplans`)
    .then(response => {
      const result = response.data.map(({ dataplan }) => {
        return dataplan;
      });

      return result;
    })
    .catch(error => error)
  },

  saveDataplan: (dataplan, datasources) => {
    const id = dataplan.id;

    const body = {
      dataplan,
      datasources
    };

    return fetch.post(`${apiPrefix}/save/${id}`, body)
    .catch(error => error)
  },

  loadDataplan: (id) => {
    return fetch.get(`${apiPrefix}/dataplan/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => error)
  },
  
  generateData: (dataplan, datasources) => {
    const body = {
      dataplan,
      datasources
    };

    return fetch.post(`${apiPrefix}/generate`, body)
    .catch(error => error)
  }

};
