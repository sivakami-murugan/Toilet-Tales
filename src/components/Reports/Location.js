import React from "react";
import LocationImage from "../../assets/Icons/LocationImage";
import LocationSecondImg from "../../assets/Icons/LocationSecondImg";
import {
  ImageContainer,
  InstituteImgContainer,
  ReportsHeading,
  ReportsSubHeading,
} from "../../modules/Projects/Partials/Reports/Styles";

const locationConfig = {
  "Commercial Area": {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in commercial areas, it is
        essential that toilets are spaced at intervals of <b>1 kilometer</b>.
        This strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Event linked Toilets": {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in Event Linked Area, it is
        essential that toilets are placed near the event. This strategic
        placement ensures that restroom facilities are readily accessible to the
        public, reducing congestion and wait times. By maintaining this specific
        distance, the infrastructure can adequately serve the needs of a high
        volume of people, promoting convenience and enhancing overall user
        satisfaction.
      </>
    ),
  },

  Market: {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in Market areas, it is essential
        that toilets are spaced at intervals of <b>1 kilometer.</b> This
        strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  Hospitals: {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in Hospital areas, it is
        essential that toilets are spaced at intervals of <b>1 kilometer.</b>{" "}
        This strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Paratransit location & Parking Area": {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in location & Parking areas, it
        is essential that toilets are spaced at intervals of 1 kilometer. This
        strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Open Area": {
    distance: "1000m",
    content: (
      <>
        In order to achieve maximum efficiency in On roads and for open areas,
        it is essential that toilets are placed at every <b>1 km,</b> including
        in parks, plaza, open air theatre, swimming area, car parks, fuel
        stations. This strategic placement ensures that restroom facilities are
        readily accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Transit area": {
    distance: "500m",
    content: (
      <>
        A toilet block must be present at the entrance which is accessible by
        everyone, at every wing/ platform of the station and separate toilets at
        waiting areas and retire rooms.{" "}
        <b>
          If the toilet is outside the premises, please consider the general
          crowd in 500 m radius along with the footfall of the transit area.
        </b>
      </>
    ),
  },
  "Public and Semi Public Area": {
    distance: "500m",
    content: (
      <>
        In order to achieve maximum efficiency in Public Spaces, it is essential
        that toilets are spaced at intervals of <b>500 meters. </b> This
        strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Community Toilets": {
    // Correct the typo here
    distance: "500m",
    content: (
      <>
        In order to achieve maximum efficiency in Community Toilets, it is
        essential that toilets are spaced at intervals of <b>500 meters.</b>{" "}
        This strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  "Institutional Areas": {
    distance: "200m",
    content: (
      <>
        There should be a toilet block at <b>every floor/ every wing</b> for all
        user groups. If the span of the building/ structure <b>exceeds 200m,</b>{" "}
        there must be toilet blocks at both ends.
      </>
    ),
  },
  "Parks and Playground": {
    distance: "800m",
    content: (
      <>
        In order to achieve maximum efficiency in Parks & Playground, it is
        essential that toilets are spaced at intervals of <b>800 meters. </b>{" "}
        This strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </>
    ),
  },
  Beaches: {
    distance: "800m",
    content: (
      <>
        In order to achieve maximum efficiency in Beaches, it is essential that
        toilets are spaced at intervals of <b>800 meters.</b> This strategic
        placement ensures that restroom facilities are readily accessible to the
        public, reducing congestion and wait times. By maintaining this specific
        distance, the infrastructure can adequately serve the needs of a high
        volume of people, promoting convenience and enhancing overall user
        satisfaction.
      </>
    ),
  },
};

function Location({ selectedChapter, updateData }) {
  const typeName = selectedChapter || {};
  const { distance = "1000m", content = null } = locationConfig[typeName] || {};

  return (
    <div>
      <ReportsHeading>Location</ReportsHeading>
      <ReportsSubHeading>{content}</ReportsSubHeading>
      {typeName === "Institutional Areas" ? (
        <InstituteImgContainer>
          <LocationImage distance={distance} />
          <LocationSecondImg />
        </InstituteImgContainer>
      ) : (
        <ImageContainer>
          <LocationImage distance={distance} />
        </ImageContainer>
      )}
    </div>
  );
}

export default Location;
