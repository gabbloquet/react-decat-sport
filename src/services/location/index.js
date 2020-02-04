import loadLocationInformations from "./google-maps-api";
import coordinatesMapper from "./coordinatesMapper";

function getCoordinates(location) {
  return loadLocationInformations(location)
    .then( locationData => { return coordinatesMapper(locationData) });
}

export default getCoordinates;
