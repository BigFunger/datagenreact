export const loadMapping = (callWithRequest, dataplan) => {
  console.log('Looking for existing mapping...');

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
