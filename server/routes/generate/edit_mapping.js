export const editMapping = (callWithRequest, dataplan, mapping) => {
  console.log('Attempting to update the mapping...');

  const {
    indexName,
    typeName
  } = dataplan;
  const mappingDef = mapping[indexName].mappings[typeName];

  return callWithRequest('transport.request', {
    path: `/${indexName}/_mapping/${typeName}`,
    method: 'PUT',
    body: mappingDef
  })
  .then((response) => {
    console.log('Mapping updated!');
    return response;
  })
  .catch((er) => {
    throw `Updating the mapping is not yet implemented. Delete your index using: DELETE ${indexName}`
  });
}