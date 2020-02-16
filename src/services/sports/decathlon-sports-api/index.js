import urlConstructor from '../../../utils/api-calls/urlConstructor';

const baseUrl = 'https://sports.api.decathlon.com';

const loadSports = tag => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/sports',
      queryParams :
        {
          tag: tag
        }
    }
  );

  return fetch(url).then(response => response.json());
};

const loadRecommandedSports = coordinates => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/sports/recommendations/geolocation',
      queryParams :
        {
          coordinates: coordinates.lat + ',' + coordinates.lng,
          source: 'popular'
        }
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

const loadSportsWithIntelligentSearch = (query, coordinates) => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/sports/search/' + query,
      queryParams :
        {
          coordinates: coordinates.lat + ',' + coordinates.lng
        }
    }
  );

  return fetch(url).then(response => response.json());
};

const loadGroups = () => {
  const url = urlConstructor(
    {
      baseUrl : baseUrl,
      apiEndpoint : '/groups'
    }
  );

  return fetch(url).then(response => response.json());
};

export {
  loadGroups,
  loadRecommandedSports,
  loadSportInformation,
  loadSports,
  loadSportsWithIntelligentSearch
};
