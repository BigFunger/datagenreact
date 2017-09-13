const datasourceMappings = {
  date: (datasource) => {
    const { type } = datasource;
    return { type };
  },
  keyword: (datasource) => {
    const { type } = datasource;
    return { type };
  },
  number: (datasource) => {
    const {
      detail: {
        type
      }
    } = datasource;
    const scalingFactor = numberType === 'scaled_float' ? datasource.scalingFactor : undefined;

    return {
      type,
      scalingFactor
    };
  },
  text: (datasource) => {
    const {
      type,
      detail: {
        analyzer,
        search_analyzer,
        search_quote_analyzer
      }
    } = datasource;

    return {
      type,
      analyzer,
      search_analyzer,
      search_quote_analyzer
    }
  }
};

export const buildMapping = (dataplan, datasources) => {
  const properties = datasources.allIds.reduce((acc, id) => {
    const datasource = datasources.byId[id];
    acc[datasource.field] = datasourceMappings[datasource.type](datasource);

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