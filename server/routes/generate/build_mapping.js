export const buildMapping = (mappers, dataplan, datasources) => {
  const properties = datasources.allIds.reduce((acc, id) => {
    const datasource = datasources.byId[id];
    const mapping = mappers[datasource.type](datasource);

    if (mapping) {
      acc[datasource.field] = mapping;
    }

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