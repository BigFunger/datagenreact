import { fetch } from './fetch';
import chrome from 'ui/chrome';

const apiPrefix = chrome.addBasePath('/api/kibana/datagenreact');

export const newService = {
  fetchDataplans: () => {
    return fetch.get(`${apiPrefix}/dataplans`)
    .then(response => {

      const result = response.data.map((dataplan) => {
        dataplan.definition.dateCreated = Date.now();
        return dataplan;
      });

      return response.data;
    })
    .catch(error => error)
  }

};
