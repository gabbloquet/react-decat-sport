import {getSport} from "../../services/sports";

function feedRelatedSports(sport, setRelatedSports){
  if(sport.related.length > 0){
    Promise.all(sport.related.map(sport => getSport(sport.data.id)))
      .then(responses => {
        setRelatedSports(responses.map(({data, data: {attributes}}) => data && attributes));
      });
  } else {
    setRelatedSports([]);
  }
}

function feedChildren(sport, setChildren){
  if(sport.children.length > 0) {
    Promise.all(sport.children.map(child => getSport(child.data.id)))
      .then(responses => {
        setChildren(responses.map(({data: {attributes}}) => attributes));
      });
  } else {
    setChildren([]);
  }
}

export {feedRelatedSports, feedChildren};
