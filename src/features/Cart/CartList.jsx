import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartItemSelector } from "./selectors";

CartList.propTypes = {};

function CartList() {
  const itemchose = useSelector(cartItemSelector);
  // console.log(itemchose);
  return (
    <Box>
      <Grid container>
        {itemchose.map((product) => (
          <Grid item key={product.id} xs={12} sm={12} md={12} lg={12}>
            <CartItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CartList;
