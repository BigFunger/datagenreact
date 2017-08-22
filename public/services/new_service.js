import { fetch } from './fetch';
import chrome from 'ui/chrome';

const apiPrefix = chrome.addBasePath('/api/kibana/datagenreact');

export const newService = {

  fetchDataplans: () => {
    return fetch.get(`${apiPrefix}/dataplans`)
    .then(response => {
      return response.data;
    })
    .catch(error => error)
  }

};
