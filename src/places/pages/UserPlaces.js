import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Emp State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  // useParams is used here to grab the user ID from the dynamic url for seeing specific user's places
  const userID = useParams().userID;
  //   Using .filter to take out all the places that match the creator id
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
