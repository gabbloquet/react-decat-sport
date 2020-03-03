import urlConstructor from './urlConstructor';

describe('Url constructor test', () => {
  const URL_CONFIGURATION = {
    baseUrl: 'https://mybaseurl',
    apiEndpoint: '/this/is/an/api/end_point',
    queryParams: {
      stores: 8000,
      lastYear: true
    }
  };

  it('should receive variables and return a url with endpoint', () => {
    const { baseUrl, apiEndpoint } = URL_CONFIGURATION;
    const expected = 'https://mybaseurl/this/is/an/api/end_point';

    expect(expected.includes(urlConstructor({ baseUrl, apiEndpoint }))).toBe(true);
  });

  it('should receive variables and return a url with endpoint and parameters', () => {
    const { baseUrl, apiEndpoint, queryParams } = URL_CONFIGURATION;
    const expected = 'https://mybaseurl/this/is/an/api/end_point?stores=8000&lastYear=true';

    expect(expected.includes(urlConstructor({ baseUrl, apiEndpoint, queryParams }))).toBe(true);
  });
});
