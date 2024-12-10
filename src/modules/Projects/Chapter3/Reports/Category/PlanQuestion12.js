import React from "react";
import DoImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/DoImg1";
import InspectsImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/InspectsImg";
import Seat1Img from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/Seat1Img";
import Seat2Img from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/Seat2Img";
import UrinalImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/UrinalImg";
import WaterImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/WaterImg1";
import WesternSeat1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/WesternSeat1";
import WesternSeat2img from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/WesternSeat2img";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
  SubList,
} from "../../../Partials/Reports/Styles";

function PlanQuestion12({ reportData }) {
  const optionData = reportData[11]?.options[0]?.option;
  return (
    <div>
      <ReportsHeading>3.6 Fixtures</ReportsHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        3.7.1 Commode{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "30px" }}>
        No of total seat allocated for Female: <b> X</b>
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "30px" }}>
        No of total seat allocated for Male: <b> X</b>
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "30px" }}>
        No of urinals: <b> X</b>
      </ReportsSubHeading>
      <ul style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          A separate toilet block/toilet cubicle for children shall be provided,
          with facilities such as urinals, commodes, and wash basins at a
          convenient height for children.
        </StyledListItem>
        <StyledListItem>
          It is also beneficial in such scenarios to give a cubicle for
          physically challenged children within the children's block.
        </StyledListItem>
        <StyledListItem>
          Even though the designer can choose the type of commode for each
          cubicle, when it comes to public and community toilets, the context
          and the preference of the users should be considered. In community
          toilets, more than half of the total number of cubicles shall be IWC.
        </StyledListItem>
      </ul>
      {/* Dyanamic Answer */}
      {/* Option A */}
      {optionData === "Indian Water closet (IWC)" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            Indian Water Closet (IWC){" "}
          </OptionHeadings>{" "}
          <ReportsSubHeading
            style={{ marginBottom: "20px", marginLeft: "30px" }}
          >
            <b>
              Squatting Toilets with or without a flush tank or cistern; a hole
              in the ground connected to a septic tank or sewage line
            </b>
          </ReportsSubHeading>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Water closets must be connected back to back using shared pipe
              ducts.
            </StyledListItem>{" "}
            <StyledListItem>
              Squatting WCs should be provided in the cubicle farthest away from
              the main entrance.{" "}
            </StyledListItem>{" "}
            <StyledListItem>
              Grab rails must be installed in cubicles that have a squatting WC.{" "}
            </StyledListItem>{" "}
            <StyledListItem>
              The cubicle should be kerbed so that water does not run out of the
              cubicle's boundary, and the cubicle floor should be suitably
              graded towards the floor trap inside the cubicle.{" "}
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <WaterImg1 />
          </PlinthImgContainer>
          <ol start={"5"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Water closets must be heavy duty classification and must be easily
              cleanable.- white vitreous china water closet- Orrisa pattern WC
              pan.
            </StyledListItem>
            <StyledListItem>
              Water closet shall be of one piece construction.
            </StyledListItem>
          </ol>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            For Public toilets:
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One water closet must be provided for every 100-400 people.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <Seat1Img />
          </PlinthImgContainer>
          <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One water closet for 250 people if the population exceeds 400.
            </StyledListItem>
            <StyledListItem>
              Depending on the circumstances and preferences of the user, the
              designer might choose between IWC and EWC.
            </StyledListItem>
            <StyledListItem>
              Both EWC and IWC must be available in women's toilet. An EWC must
              be provided for each IWC. Women sometimes prefer IWC over EWC.
            </StyledListItem>
          </ol>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            For community Toilets:
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Two toilets must be provided for every 100-200 people.{" "}
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <Seat2Img />
          </PlinthImgContainer>
          <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Above 200 people, one water closet must be provided for every 100
              people.
            </StyledListItem>
            <StyledListItem>
              Depending on the circumstances and preferences of the user, the
              designer might choose between IWC and EWC. In the case of
              community toilets, it is always preferable to provide IWC.
            </StyledListItem>
          </ol>
        </div>
      )}
      {optionData === "European Water closet (EWC)" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            2.European Water closet (EWC):{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              A clear width of at least 3 feet must be provided in front of the
              water commode, with a minimum of 2.5 feet available for the user
              to rest their legs, get up, or turn around. It applies to both
              floor-mounted and wall-mounted commodes.
            </StyledListItem>
            <StyledListItem>
              If a toilet cubicle contains both a water commode and a urinal,
              the distance between the center of the commode and a wall/urinal
              should be at least 18 inches. Depending on the width of the second
              bath fixture, this extends the minimum suggested width by an
              additional 26 inch-29 inch, for a total width of between 62 inch
              and 65 inch.
            </StyledListItem>
            <StyledListItem>
              Wall-mounted WCs must be installed at a height of 0.48 m above the
              finished floor level.
            </StyledListItem>
          </ol>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            For Public toilets:{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One water closet must be provided for every 100-400 people.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <WesternSeat1 />
          </PlinthImgContainer>
          <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One water closet for 250 people if the population exceeds 400.
            </StyledListItem>
            <StyledListItem>
              Depending on the circumstances and preferences of the user, the
              designer might choose between IWC and EWC.
            </StyledListItem>
            <StyledListItem>
              Both EWC and IWC must be available in women's toilet. An EWC must
              be provided for each IWC. Women sometimes prefer IWC over EWC.
            </StyledListItem>
          </ol>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            For community Toilets:{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Two toilets must be provided for every 100-200 people.{" "}
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <WesternSeat2img />
          </PlinthImgContainer>
          <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              Above 200 people, one water closet must be provided for every 100
              people.
            </StyledListItem>
            <StyledListItem>
              Depending on the circumstances and preferences of the user, the
              designer might choose between IWC and EWC.
            </StyledListItem>
            <StyledListItem>
              Incase of community toilets, it is always ideal to provided IWC.
              In such cases, one European water closet must be provided for
              every 5-10 Indian water closets.
            </StyledListItem>
          </ol>
        </div>
      )}
      {optionData === "Mix of both the above options" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            3. European water closet for physically challenged users{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One European W.C. in a set of toilets must be provided for
              physically challenged people, along with a wash basin. There shall
              be one in each of the male and female toilet blocks.
            </StyledListItem>
            <StyledListItem>
              It is ideal to have a separate block dedicated to universally
              accessible toilets.
            </StyledListItem>
            <StyledListItem>
              A clear width of 48 inches is required in front of the WC.
            </StyledListItem>
            <StyledListItem>
              The cubicle must have a minimum size of 1500 mm x 1750 mm.
            </StyledListItem>
            <StyledListItem>
              Vertical and horizontal railings with a 50 mm clearance from the
              wall must be provided.
            </StyledListItem>
            <StyledListItem>
              The door must have a minimum clear opening of 900 mm.
            </StyledListItem>
            <StyledListItem>
              The toilet seat must be placed at a height of 500 mm above the
              finished floor level.
            </StyledListItem>
            <StyledListItem>
              A slight slope of up to 10 mm shall be provided between the level
              of the corridor floor and the level of the toilet rooms floor.
            </StyledListItem>
            <StyledListItem>
              Inside the toilet cubicle, there must be no level differences or
              steps.
            </StyledListItem>
            <StyledListItem>
              Under no circumstances should the commode be put on the raised
              pedestal.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <DoImg1 />
          </PlinthImgContainer>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            4.Urinals
          </OptionHeadings>{" "}
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "35px" }}>
            Urinals for men{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              In public toilets, one urinal must be provided for every 50
              people.
            </StyledListItem>
            <StyledListItem>
              {" "}
              One urinal per 200-300 people is required for community toilets.
            </StyledListItem>{" "}
            <StyledListItem>
              {" "}
              One urinal per 200-300 people is required for community toilets.
            </StyledListItem>{" "}
            <StyledListItem>
              {" "}
              A urinal should not be positioned closer than 450mm to any side
              wall, partition, vanity, or other barrier, or closer than 900mm
              center-to-center between neighbouring fixtures. There should be at
              least 900mm clear width between the urinal and any wall, fixture,
              or door.
            </StyledListItem>{" "}
            <StyledListItem>
              Urinals should be separated by modesty boards measuring at least
              300mm x 1800mm (Height) to act as a visual barrier between them.
              The modesty boards should be placed high enough to obscure other
              users' views. However, it should not extend all the way down to
              the floor to facilitate ease of cleaning.
            </StyledListItem>{" "}
            <StyledListItem>
              {" "}
              The availability of modesty boards minimises the chance of shy
              consumers utilising the restrooms, and in fewer instances of
              toilet stains.
            </StyledListItem>{" "}
            <StyledListItem>
              {" "}
              Handrails / grab rails should be provided for at least one urinal.
            </StyledListItem>{" "}
            <StyledListItem>
              Scupper drains or stainless steel grating with a maximum width of
              150 mm shall be installed along the wall beneath the urinals to
              keep them dry.
            </StyledListItem>
            <StyledListItem>
              All urinal flush valves must have a sensor-operated flush valve
              with a manual override feature.
            </StyledListItem>
            <StyledListItem>
              Urinals must be at least 300mm wide, with the collection area's
              lip protruding from the wall by at least 300mm.
            </StyledListItem>
            <StyledListItem>
              Scupper drains or stainless steel grates over the drainage could
              be placed underneath the urinals to keep them dry.
            </StyledListItem>
            <StyledListItem>
              A hand washing station or foot-operated garbage bins must be
              provided near the urinals so that users can wash their hands or
              clean up with tissue paper after urinating. This prevents tissue
              or cigarette butts from clogging the urinals. If the budget
              permits, sensor-activated hand washing facilities are ideal.
            </StyledListItem>
            <StyledListItem>
              Urinals can also be made to make aiming easier, for example by
              including images of insects in urinals and floor prints, or by
              displaying coloured tiles on the floor to entice users to stand
              closer. This will aid in keeping the floor dry and preventing
              dripping.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <InspectsImg />
          </PlinthImgContainer>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            Urinals for women
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              In public toilets, one urinal must be provided for every 50
              individuals.
            </StyledListItem>
            <StyledListItem>
              For community toilets, one urinal per 200-300 people is required.
            </StyledListItem>
            <StyledListItem>
              Urinals for women must be provided in community toilets, using the
              same thumb rule as for males.
            </StyledListItem>
          </ol>
          <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
            Urinals for kids{" "}
          </OptionHeadings>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <StyledListItem>
              One urinal must be provided for every 200-300 children in the case
              of a separate children's toilet block (community toilet).
            </StyledListItem>
            <StyledListItem>
              Where there are no separate toilet blocks, one children's urinal
              must be provided for every two adult urinals.
            </StyledListItem>
            <StyledListItem>
              Wall mounted urinal for children :
              <SubList>
                <StyledListItem>
                  i The urinal shall be stall-type or wall-hung, with an
                  extended rim no higher than 15 inches (381mm) above the
                  finished floor level
                </StyledListItem>
                <StyledListItem>
                  ii. Flush controls must be manually or automatically actuated
                  and positioned no higher than 44 inches (1120mm) above the
                  finished floor level.
                </StyledListItem>
              </SubList>
            </StyledListItem>
            <StyledListItem>
              Urinals must be at least 13 1/2" (345 mm) deep measured from the
              edge of the urinal rim to the back of the fixture.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <UrinalImg />
          </PlinthImgContainer>
          <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
            <ReportsSubHeading>
              ii. In each gender-segregated block, at least one cubicle and
              urinal must be designated for children. Children, for example,
              must have their own cubicle in the male toilet.
            </ReportsSubHeading>
          </ol>
        </div>
      )}
      {/* Option B */}
      {/* <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        2.European Water closet (EWC):{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          A clear width of at least 3 feet must be provided in front of the
          water commode, with a minimum of 2.5 feet available for the user to
          rest their legs, get up, or turn around. It applies to both
          floor-mounted and wall-mounted commodes.
        </StyledListItem>
        <StyledListItem>
          If a toilet cubicle contains both a water commode and a urinal, the
          distance between the center of the commode and a wall/urinal should be
          at least 18 inches. Depending on the width of the second bath fixture,
          this extends the minimum suggested width by an additional 26 inch-29
          inch, for a total width of between 62 inch and 65 inch.
        </StyledListItem>
        <StyledListItem>
          Wall-mounted WCs must be installed at a height of 0.48 m above the
          finished floor level.
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        For Public toilets:{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          One water closet must be provided for every 100-400 people.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <WesternSeat1 />
      </PlinthImgContainer>
      <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          One water closet for 250 people if the population exceeds 400.
        </StyledListItem>
        <StyledListItem>
          Depending on the circumstances and preferences of the user, the
          designer might choose between IWC and EWC.
        </StyledListItem>
        <StyledListItem>
          Both EWC and IWC must be available in women's toilet. An EWC must be
          provided for each IWC. Women sometimes prefer IWC over EWC.
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        For community Toilets:{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Two toilets must be provided for every 100-200 people.{" "}
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <WesternSeat2img />
      </PlinthImgContainer>
      <ol start={"2"} style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Above 200 people, one water closet must be provided for every 100
          people.
        </StyledListItem>
        <StyledListItem>
          Depending on the circumstances and preferences of the user, the
          designer might choose between IWC and EWC.
        </StyledListItem>
        <StyledListItem>
          Incase of community toilets, it is always ideal to provided IWC. In
          such cases, one European water closet must be provided for every 5-10
          Indian water closets.
        </StyledListItem>
      </ol> */}
      {/* Option C */}
      {/* <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        3. European water closet for physically challenged users{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          One European W.C. in a set of toilets must be provided for physically
          challenged people, along with a wash basin. There shall be one in each
          of the male and female toilet blocks.
        </StyledListItem>
        <StyledListItem>
          It is ideal to have a separate block dedicated to universally
          accessible toilets.
        </StyledListItem>
        <StyledListItem>
          A clear width of 48 inches is required in front of the WC.
        </StyledListItem>
        <StyledListItem>
          The cubicle must have a minimum size of 1500 mm x 1750 mm.
        </StyledListItem>
        <StyledListItem>
          Vertical and horizontal railings with a 50 mm clearance from the wall
          must be provided.
        </StyledListItem>
        <StyledListItem>
          The door must have a minimum clear opening of 900 mm.
        </StyledListItem>
        <StyledListItem>
          The toilet seat must be placed at a height of 500 mm above the
          finished floor level.
        </StyledListItem>
        <StyledListItem>
          A slight slope of up to 10 mm shall be provided between the level of
          the corridor floor and the level of the toilet rooms floor.
        </StyledListItem>
        <StyledListItem>
          Inside the toilet cubicle, there must be no level differences or
          steps.
        </StyledListItem>
        <StyledListItem>
          Under no circumstances should the commode be put on the raised
          pedestal.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <DoImg1 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        4.Urinals
      </OptionHeadings>{" "}
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "35px" }}>
        Urinals for men{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          In public toilets, one urinal must be provided for every 50 people.
        </StyledListItem>
        <StyledListItem>
          {" "}
          One urinal per 200-300 people is required for community toilets.
        </StyledListItem>{" "}
        <StyledListItem>
          {" "}
          One urinal per 200-300 people is required for community toilets.
        </StyledListItem>{" "}
        <StyledListItem>
          {" "}
          A urinal should not be positioned closer than 450mm to any side wall,
          partition, vanity, or other barrier, or closer than 900mm
          center-to-center between neighbouring fixtures. There should be at
          least 900mm clear width between the urinal and any wall, fixture, or
          door.
        </StyledListItem>{" "}
        <StyledListItem>
          Urinals should be separated by modesty boards measuring at least 300mm
          x 1800mm (Height) to act as a visual barrier between them. The modesty
          boards should be placed high enough to obscure other users' views.
          However, it should not extend all the way down to the floor to
          facilitate ease of cleaning.
        </StyledListItem>{" "}
        <StyledListItem>
          {" "}
          The availability of modesty boards minimises the chance of shy
          consumers utilising the restrooms, and in fewer instances of toilet
          stains.
        </StyledListItem>{" "}
        <StyledListItem>
          {" "}
          Handrails / grab rails should be provided for at least one urinal.
        </StyledListItem>{" "}
        <StyledListItem>
          Scupper drains or stainless steel grating with a maximum width of 150
          mm shall be installed along the wall beneath the urinals to keep them
          dry.
        </StyledListItem>
        <StyledListItem>
          All urinal flush valves must have a sensor-operated flush valve with a
          manual override feature.
        </StyledListItem>
        <StyledListItem>
          Urinals must be at least 300mm wide, with the collection area's lip
          protruding from the wall by at least 300mm.
        </StyledListItem>
        <StyledListItem>
          Scupper drains or stainless steel grates over the drainage could be
          placed underneath the urinals to keep them dry.
        </StyledListItem>
        <StyledListItem>
          A hand washing station or foot-operated garbage bins must be provided
          near the urinals so that users can wash their hands or clean up with
          tissue paper after urinating. This prevents tissue or cigarette butts
          from clogging the urinals. If the budget permits, sensor-activated
          hand washing facilities are ideal.
        </StyledListItem>
        <StyledListItem>
          Urinals can also be made to make aiming easier, for example by
          including images of insects in urinals and floor prints, or by
          displaying coloured tiles on the floor to entice users to stand
          closer. This will aid in keeping the floor dry and preventing
          dripping.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <InspectsImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Urinals for women
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          In public toilets, one urinal must be provided for every 50
          individuals.
        </StyledListItem>
        <StyledListItem>
          For community toilets, one urinal per 200-300 people is required.
        </StyledListItem>
        <StyledListItem>
          Urinals for women must be provided in community toilets, using the
          same thumb rule as for males.
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Urinals for kids{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          One urinal must be provided for every 200-300 children in the case of
          a separate children's toilet block (community toilet).
        </StyledListItem>
        <StyledListItem>
          Where there are no separate toilet blocks, one children's urinal must
          be provided for every two adult urinals.
        </StyledListItem>
        <StyledListItem>
          Wall mounted urinal for children :
          <SubList>
            <StyledListItem>
              i The urinal shall be stall-type or wall-hung, with an extended
              rim no higher than 15 inches (381mm) above the finished floor
              level
            </StyledListItem>
            <StyledListItem>
              ii. Flush controls must be manually or automatically actuated and
              positioned no higher than 44 inches (1120mm) above the finished
              floor level.
            </StyledListItem>
          </SubList>
        </StyledListItem>
        <StyledListItem>
          Urinals must be at least 13 1/2" (345 mm) deep measured from the edge
          of the urinal rim to the back of the fixture.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <UrinalImg />
      </PlinthImgContainer>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <ReportsSubHeading>
          ii. In each gender-segregated block, at least one cubicle and urinal
          must be designated for children. Children, for example, must have
          their own cubicle in the male toilet.
        </ReportsSubHeading>
      </ol> */}
    </div>
  );
}

export default PlanQuestion12;
