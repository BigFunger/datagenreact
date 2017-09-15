export const mapSeries = (arr) => {
  if (!Array.isArray(arr)) throw new Error('mapSeries requires an Array');
  const length = arr.length;
  const results = new Array(length);

  arr.reduce((chain, item, i) => {
    return chain.then(() => item).then(val => results[i] = val);
  }, Promise.resolve())
  .then(() => results);
}