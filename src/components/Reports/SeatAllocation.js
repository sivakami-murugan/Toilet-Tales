import React from "react";
import Grid from "@mui/material/Grid";
import {
  Item,
  AllocationContainer,
  SubItem,
} from "../../modules/Projects/Partials/Reports/Styles";

function SeatAllocationItem({
  ImageComponent,
  gender,
  football,
  seatAllocation,
  urinalAllocation,
}) {
  const showUrinalAllocation = gender !== "Female";

  return (
    <Grid container spacing={1} alignItems="center" mb={5}>
      <Grid item xs={12} sm={2}>
        <ImageComponent />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Item>
              <Item>Gender</Item>
              <SubItem>{gender}</SubItem>
            </Item>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Item>
              <Item>Foot Fall</Item>
              <SubItem>{football}</SubItem>
            </Item>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Item>
              <Item>Seat Allocation</Item>
              <SubItem>{seatAllocation}</SubItem>
            </Item>
          </Grid>
          {showUrinalAllocation && (
            <Grid item xs={12} sm={2}>
              <Item>
                <Item>Urinal Allocation</Item>
                <SubItem>{urinalAllocation}</SubItem>
              </Item>
            </Grid>
          )}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SeatAllocationItem;
