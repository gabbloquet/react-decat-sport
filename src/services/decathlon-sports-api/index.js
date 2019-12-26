import urlConstructor from "../../utils/api-calls/helper";

const loadSportsInformations = coordinates => {
  const url = urlConstructor(
    {
      baseUrl : 'https://sports.api.decathlon.com',
      apiEndpoint : '/sports/recommendations/geolocation',
      queryParams : { coordinates: coordinates.lat + ',' + coordinates.lng }
    }
  );

  return fetch(url).then(response => response.json());
};

const feedSports = coordinates => {
  return loadSportsInformations(coordinates)
    .then(data => {
      if(data.length > 0) {
        let tmp = data
          .map((line) => (
              {
                id: line.id,
                name: line.attributes.name
              }
            )
          );
        return tmp;
      }
    });
};

export {feedSports, loadSportsInformations};
