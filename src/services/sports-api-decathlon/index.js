import urlConstructor from "../../utils/helper";

const loadSportsInformations = coordinates => {
  const url = urlConstructor(
    {
      baseUrl : 'https://sports.api.decathlon.com',
      apiEndpoint : '/sports/recommendations/geolocation',
      queryParams : { coordinates: coordinates.x + ',' + coordinates.y }
    }
  );

  return fetch(url).then(response => response.json());
};

export default loadSportsInformations;
