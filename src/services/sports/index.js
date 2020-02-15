import {loadRecommandedSports, loadSportInformation, loadSportsWithIntelligentSearch} from "./decathlon-sports-api";
import SportsMapper from './sportMapper';

const getRecommandedSports = coordinates => {
  return loadRecommandedSports(coordinates)
    .then(data => SportsMapper(data));
};

const getSport = sportId => {
  return loadSportInformation(sportId);
};

const getSportsWithIntelligentSearch = (query, coordinates) => {
  return loadSportsWithIntelligentSearch(query, coordinates)
    .then(data => SportsMapper(data));
};

export {getSport, getRecommandedSports, getSportsWithIntelligentSearch};
