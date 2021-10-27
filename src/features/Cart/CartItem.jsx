import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLAHO } from "../../constants/common";
import { formatPrice } from "../../utils";
import QuantityCart from "../Cart/QuantityCart";
import { useSelector } from "react-redux";
import { cartTotleItem } from "./selectors";

CartItem.propTypes = {
  product: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
  title: {
    fontSize: "14px",
    marginRight: "20px",
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: "bold",
  },
  originalPricre: {
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
  },
}));

function CartItem({ product = {} }) {
  const cartTotal = product.quantity > 0 ? product.quantity * product.product.salePrice : 0;

  const classes = useStyle();
  const thumbnailUrl = product.product.thumbnail ? `${STATIC_HOST}${product.product.thumbnail?.url}` : THUMBNAIL_PLAHO;
  const handleChangeCount = (value) => {
    console.log(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item padding={1} md={3}>
        <img className={classes.img} src={thumbnailUrl} alt={product.product.name} />
      </Grid>
      <Grid item md={2}>
        <Typography className={classes.title} variant="body2">
          {product.product.name}
        </Typography>
      </Grid>

      <Grid item md={2} className={classes.salePrice}>
        {formatPrice(product.product.salePrice)}
      </Grid>
      <Grid item md={1}>
        {product.product.promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPricre}>
              {formatPrice(product.product.originalPrice)}
            </Box>
          </>
        )}
      </Grid>
      <Grid item md={2}>
        <QuantityCart onChange={handleChangeCount} product={product} />
      </Grid>

      <Grid item md={2}>
        <Typography className={classes.salePrice} variant="body2" md={4}>
          {formatPrice(cartTotal)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CartItem;
