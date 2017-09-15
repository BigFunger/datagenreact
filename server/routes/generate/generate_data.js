import { v4 } from 'node-uuid';
import { mapSeries } from '../../lib/map_series';

export function generateData(callWithRequest, generators, dataplan, datasources) {
  console.log('Generating data!');
  const promises = [];

  for (let i=0; i < dataplan.numberOfDocuments; i++) {
    promises.push(indexDocument(callWithRequest, generators, dataplan, datasources));
  }

  return mapSeries(promises);
}

function indexDocument(callWithRequest, generators, dataplan, datasources) {
  let body = {};

  datasources.allIds.forEach(id => {
    const datasource = datasources.byId[id];
    const generator = generators[datasource.type];
    body = generator(datasource, body);
  });

  //TODO create a mechanic for adding scripts to modify the data.

  return callWithRequest('index', {
    index: dataplan.indexName,
    type: dataplan.typeName,
    id: v4(),
    body: body
  });
}
