/**
 * Recovery of basic data for the construction of an url with the base, the endpoint and the parameters if necessary,
 * it returns a usable url for API calls.
 * @param {URLConfig} urlConfig - The URL configuration object
 * @returns {string} - The URL built
 */
const urlConstructor = ({ baseUrl, apiEndpoint, queryParams }) => {
  let urlConfig = `${baseUrl}${apiEndpoint}`;

  if (queryParams) {
    const queryString = Object.keys(queryParams)
      .map(key => key + '=' + queryParams[key])
      .join('&');

    urlConfig += `?${queryString}`;
  }

  return urlConfig;
};

export default urlConstructor;
