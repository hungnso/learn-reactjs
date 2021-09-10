import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

ShortSkeleton.propTypes = {};

function ShortSkeleton(props) {
  return (
    <div>
      <Box padding={1}>
        <Grid container padding={1}>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            {" "}
            <Skeleton variant="react" width="100%" />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <Skeleton variant="react" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ShortSkeleton;
