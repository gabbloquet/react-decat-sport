import urlConstructor from './helper';

describe('Url constructor test', () => {
  const URL_CONFIGURATION = {
    baseUrl: 'https://myBaseUrl',
    apiEndpoint: '/this/is/an/api/end_point',
    queryParams: {
      stores: 8000,
      lastYear: true
    }
  };

  it('should receive variables and return a url with endpoint', () => {
    const { baseUrl, apiEndpoint } = URL_CONFIGURATION;
    const expected = `${baseUrl}${apiEndpoint}`;

    expect(urlConstructor({ baseUrl, apiEndpoint })).toEqual(expected);
  });

  it('should receive variables and return a url with endpoint and parameters', () => {
    const { baseUrl, apiEndpoint, queryParams } = URL_CONFIGURATION;

    const expected = `${baseUrl}${apiEndpoint}?stores=${queryParams.stores}&lastYear=${queryParams.lastYear}`;

    expect(urlConstructor({ baseUrl, apiEndpoint, queryParams })).toEqual(expected);
  });
});
