import { random } from 'lodash';

export const generator = (datasource, body) => {
  const {
    field,
    detail: {
      type,
      rangeMin,
      rangeMax
    }
  } = datasource;

  const floatingTypes = {
    long: false,
    integer: false,
    short: false,
    byte: false,
    double: true,
    float: true,
    half_float: true,
    scaled_float: true
  };
  const isFloating = floatingTypes[type];
  const value = random(rangeMin, rangeMax, isFloating);

  return {
    ...body,
    [field]: value
  };
}

export const mapper = (datasource) => {
  const {
    detail: {
      type,
      scalingFactor
    }
  } = datasource;

  const mapping = {
    type,
    scalingFactor
  };

  if (type !== 'scaled_float') {
    delete mapping.scalingFactor
  };

  return mapping;
}
