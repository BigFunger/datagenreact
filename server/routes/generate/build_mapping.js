export const buildMapping = (mappers, dataplan, datasources) => {
  const properties = datasources.allIds.reduce((acc, id) => {
    const datasource = datasources.byId[id];
    const mapping = mappers[datasource.type](datasource);

    return { ...acc, ...mapping};
  }, {});

  return {
    mappings: {
      [dataplan.typeName]: {
        properties
      }
    }
  };
}