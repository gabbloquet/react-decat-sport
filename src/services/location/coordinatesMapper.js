function coordinatesMapper(locationData){
  return locationData && locationData.results[0].geometry.location;
}

export default coordinatesMapper;
