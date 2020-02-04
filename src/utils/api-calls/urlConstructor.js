import URLSearchParams from '@ungap/url-search-params'

const urlConstructor = ({ baseUrl, apiEndpoint, queryParams }) => {
  let urlConfig = new URL(`${baseUrl}${apiEndpoint}`);

  if (queryParams)
    urlConfig.search = new URLSearchParams(queryParams).toString()

  return urlConfig;
};

export default urlConstructor;
