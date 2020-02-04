import urlConstructor from "../../../utils/api-calls/urlConstructor";

const googleApiKey = 'AIzaSyDy8HgQCmtWbEKeHm8kWNY4QIjQCTx6o_A';

const loadLocationInformations = city => {
  const url = urlConstructor(
    {
      baseUrl : 'https://maps.googleapis.com',
      apiEndpoint : '/maps/api/geocode/json',
      queryParams : {
        address: city,
        key: googleApiKey
      }
    }
  );

  return fetch(url).then(
    response => response.json()
  );
};

export default loadLocationInformations;
