import _ from 'lodash';
import { buildMapping } from './build_mapping';

export function updateMapping(callWithRequest, dataplan, datasources) {
  return loadMapping(callWithRequest, dataplan)
  .then((mapping) => {
    if (!mapping) {
      console.log('CREATE MAPPING');
      return createMapping(callWithRequest, dataplan, datasources);
    } else {
      console.log('CHANGE MAPPING');
      //return changeMapping(callWithRequest, dataplan, mapping);
    }
  });
}

function changeMapping(callWithRequest, dataplan, mapping) {
  const typeMapping = _.get(dataplan.mapping, `mappings.${dataplan.typeName}`);

  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}/_mapping/${dataplan.typeName}`,
    method: 'PUT',
    body: typeMapping
  })
  .then((response) => {
    return response;
  })
  .catch((er) => {
    throw `Updating the mapping is not yet implemented. Delete your index using: DELETE ${dataplan.indexName}`
  });
}

function createMapping(callWithRequest, dataplan, datasources) {
  const body = buildMapping(dataplan, datasources);

  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}`,
    method: 'PUT',
    body
  })
  .then((response) => {
    return response;
  });
}

function loadMapping(callWithRequest, dataplan) {
  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}/_mapping/${dataplan.typeName}`,
    method: 'GET'
  })
  .then((response) => {
    return response;
  })
  .catch((er) => {
    if (er.statusCode === 404) {
      return undefined;
    }
    return er;
  });
}
