import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "20px",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

DetailPage.propTypes = {};

function DetailPage(props) {
  const classes = useStyle();
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              Info
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
