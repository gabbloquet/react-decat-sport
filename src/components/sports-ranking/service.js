import {getSport} from "../../services/sports";

function extractSports(sportsData){
  console.log(sportsData);
  return sportsData
    .filter(sport => !sport.error)
    .map(({data, data: { attributes }}) => data && attributes);
}

function feedRelatedSports(sport, setRelatedSports){
  if(sport.related.length > 0){
    Promise.all(sport.related.map(sport => getSport(sport.data.id)))
      .then(responses => {
        setRelatedSports(extractSports(responses));
      });
  } else {
    setRelatedSports([]);
  }
}

function feedChildren(sport, setChildren){
  if(sport.children.length > 0) {
    Promise.all(sport.children.map(child => getSport(child.data.id)))
      .then(responses => {
        setChildren(extractSports(responses));
      });
  } else {
    setChildren([]);
  }
}

export {feedRelatedSports, feedChildren};
