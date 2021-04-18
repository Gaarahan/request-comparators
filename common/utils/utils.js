export const getOriginUrl = (url) => {
  const indexOfQuery = url.indexOf('?');
  if (indexOfQuery >= 0) {
    return url.slice(0, indexOfQuery)
  }
  return url;
}
