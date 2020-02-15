import React from "react";
import CoordinateSelector from "./coodinate-selector";
import LocationSelector from "./location-selector";
import {SectionTitle} from "../../utils/styles/title";
import {LocationCard} from "../../utils/styles/section";

const LocationResearch = ({ coordinates, onCoordinatesChange, location, onLocationChange }) => {
  return (
    <LocationCard>
      <SectionTitle>By searching with coordinates</SectionTitle>
      <CoordinateSelector value={coordinates} onChange={onCoordinatesChange}/>
      <SectionTitle>By searching with location</SectionTitle>
      <LocationSelector value={location} onChange={onLocationChange}/>
    </LocationCard>
  );
};

export default LocationResearch;
