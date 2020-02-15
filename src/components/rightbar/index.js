import React from "react";
import SportsRanking from "../sports-ranking";
import {SportMiniature} from "../../utils/styles/image";
import {Loader} from "../../utils/styles/loader";

const RightBar = ({isLoading, sports, error}) => {
  return (
    (!isLoading && !error && sports && sports.length > 0) ? (
        <SportsRanking sports={sports}/>
    ) : error ? (
      <div>
        <SportMiniature src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Warning_icon.svg/420px-Warning_icon.svg.png"/>
        <p>Unable to find sports information for this location</p>
      </div>
    ) : (
      <div>
        <Loader/>
      </div>
    )
  );
};

export default RightBar;
