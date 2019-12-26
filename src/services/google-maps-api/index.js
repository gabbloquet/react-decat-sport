import urlConstructor from "../../utils/api-calls/helper";

const loadLocationInformations = city => {
  const url = urlConstructor(
    {
      baseUrl : 'https://maps.googleapis.com',
      apiEndpoint : '/maps/api/geocode/json',
      queryParams : {
        address: city,
        key: 'AIzaSyDy8HgQCmtWbEKeHm8kWNY4QIjQCTx6o_A'
      }
    }
  );

  return fetch(url).then(
    response => response.json()
  );
};

const locationDataToCoodinates = locationData => {
  return locationData && locationData["results"][0].geometry.location;
};

export {loadLocationInformations, locationDataToCoodinates};
