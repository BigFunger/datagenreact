import { buildMapping } from './build_mapping';

export const createMapping = (callWithRequest, mappers, dataplan, datasources) => {
  console.log('Creating the mapping...');

  const body = buildMapping(mappers, dataplan, datasources);

  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}`,
    method: 'PUT',
    body
  })
  .then((response) => {
    return response;
  });
}
