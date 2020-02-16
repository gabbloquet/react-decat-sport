import {
  loadGroups,
  loadRecommandedSports,
  loadSportInformation,
  loadSports,
  loadSportsWithIntelligentSearch
} from "./decathlon-sports-api";
import SportsMapper from './sportMapper';

const getRecommandedSports = coordinates => {
  return loadRecommandedSports(coordinates)
    .then(data => SportsMapper(data));
};

const getSport = sportId => {
  return loadSportInformation(sportId);
};

const getSports = (tag) => {
  return loadSports(tag);
};

const getGroups = () => {
  return loadGroups();
};

const getSportsWithIntelligentSearch = (query, coordinates) => {
  return loadSportsWithIntelligentSearch(query, coordinates)
    .then(data => SportsMapper(data));
};

export {
  getGroups,
  getSport,
  getSports,
  getRecommandedSports,
  getSportsWithIntelligentSearch
};
