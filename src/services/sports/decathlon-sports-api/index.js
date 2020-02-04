import urlConstructor from '../../../utils/api-calls/urlConstructor';

const baseUrl = 'https://sports.api.decathlon.com';

const loadSportsInformations = coordinates => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/sports/recommendations/geolocation',
      queryParams : { coordinates: coordinates.lat + ',' + coordinates.lng }
    }
  );

  return fetch(url).then(response => response.json());
};

const loadSportInformation = sportId => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/sports/' + sportId,
      queryParams : { }
    }
  );

  return fetch(url).then(response => response.json());
};

export {loadSportInformation, loadSportsInformations};
