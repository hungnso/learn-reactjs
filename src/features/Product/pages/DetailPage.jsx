import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router";
import ProductThumbnail from "../components/ProductThumbnail";
import ProductDescription from "../components/ProductDescription";
import ProductAdditional from "../components/ProductAdditional";
import ProductReview from "../components/ProductReview";
import useProductDetail from "../hooks/useProductDetail";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductInfo from "../components/ProductInfo";
import AddToCardForm from "../components/AddToCardForm";
import ProductMenu from "../components/ProductMenu";
import { addTocard } from "../../Cart/cartSlice";
import { useDispatch } from "react-redux";

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
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    );
  }
  const handleAddToCardSubmit = (formValues) => {
    const action = addTocard({
      id: product.id,
      product,
      quantity: formValues.quantity,
    });
    console.log(action);
    dispatch(action);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCardForm onSubmit={handleAddToCardSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>
          <Route exact path={`${url}/additional`}>
            <ProductAdditional />
          </Route>
          <Route exact path={`${url}/reviews`}>
            <ProductReview />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
