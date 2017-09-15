export const buildMapping = (mappers, dataplan, datasources) => {
  const properties = datasources.allIds.reduce((acc, id) => {
    const datasource = datasources.byId[id];
    acc[datasource.field] = mappers[datasource.type](datasource);

    return acc;
  }, {});

  return {
    mappings: {
      [dataplan.typeName]: {
        properties
      }
    }
  };
}