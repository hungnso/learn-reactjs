import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

SkeletonCategory.propTypes = {
  length: PropTypes.number,
};

SkeletonCategory.defaultProps = {
  length: 6,
};

function SkeletonCategory({ length }) {
  return (
    <Box>
      <Box padding={1}>
        <Skeleton variant="react" width="100%" />
      </Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
            <Box paddingLeft={1}>
              <Skeleton variant="text" width="50%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkeletonCategory;
