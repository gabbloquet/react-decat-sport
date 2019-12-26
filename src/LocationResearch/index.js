import React from "react";
import CoordinateSelector from "./CoordinateSelector";
import LocationSelector from "./LocationSelector";
import {LocationCard, Section} from '../utils/styles/components';

const LocationResearch = ({ coordinates, onCoordinatesChange, location, onLocationChange }) => {
  return (
    <LocationCard>
      <Section>By searching with coordinates</Section>
      <CoordinateSelector value={coordinates} onChange={onCoordinatesChange}/>
      <Section>By searching with location</Section>
      <LocationSelector value={location} onChange={onLocationChange}/>
    </LocationCard>
  );
};

export default LocationResearch;
