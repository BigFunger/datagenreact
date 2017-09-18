import { random } from 'lodash';
import moment from 'moment';
import gaussian from 'gaussian';

export const generator = (datasource, body) => {
  const {
    detail: {
      field,
      method,
      startDate,
      endDate,
      value,
      applyNormalDistribution,
      initialOffset,
      distributionWindow,
      distributionOffset
    }
  } = datasource;

  let result;

  if (method === 'now') {
    const date = new Date();
    result = date.getTime();
  }

  if (method === 'value') {
    const date = new Date(value);
    result = date.getTime();
  }

  if(method === 'range') {
    const startDateVal = new Date(startDate).getTime();
    const endDateVal = new Date(endDate).getTime();
    const range = endDateVal - startDateVal;
    result = startDateVal + random(range);

    if (applyNormalDistribution) {
      const fullRange = endDateVal - startDateVal;
      const limitedRange = fullRange - initialOffset;
      const windowAndOffset = distributionWindow + distributionOffset;
      const windowCount = Math.round(limitedRange / windowAndOffset, 0);
      const windowIndex = random(windowCount);
      const windowStart = startDate + distributionOffset + (windowAndOffset * (windowIndex));

      const standardDeviations = 3;
      const mean = distributionWindow / 2;
      const variance = (mean / 3) * (mean / 3);

      const distribution = gaussian(mean, variance);
      const weightedValue = distribution.ppf(Math.random());
      const date = new Date(windowStart + weightedValue);
      result = date.getTime();
    }
  }

  return {
    ...body,
    [field]: result
  };
}

export const mapper = (datasource) => {
  const {
    type,
    detail: {
      field
    }
  } = datasource;

  return {
    [field]: {
      type
    }
  }
}
