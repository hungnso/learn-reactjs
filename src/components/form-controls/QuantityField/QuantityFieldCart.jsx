import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, IconButton, makeStyles, OutlinedInput } from "@material-ui/core";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { setQuantity, removeFromCard } from "../../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";

QuantityFieldCart.propTypes = {
  product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    maxWidth: "200px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    width: "50px",
    height: "30px",
  },
}));
function QuantityFieldCart({ product = {} }) {
  const [state, setState] = useState(product.quantity);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickSubtraction = () => {
    setState(state - 1);
    const action = setQuantity({
      id: product.id,
      quantity: state - 1,
    });
    console.log(action.payload.quantity);
    dispatch(action);
    if (action.payload.quantity < 0) {
      const action = removeFromCard(product.id);
      dispatch(action);
    }
  };
  const handleClickAddition = () => {
    setState(state + 1);
    const action = setQuantity({
      id: product.id,
      quantity: state < 0 ? 0 : state + 1,
    });
    console.log(action);
    dispatch(action);
  };
  return (
    <Box className={classes.box}>
      <IconButton onClick={handleClickSubtraction}>
        <RemoveCircleOutline />
      </IconButton>
      {/* <OutlinedInput value={state} className={classes.text} /> */}
      <input type="number" name="count" value={state >= 0 ? state : 0} className={classes.text} min={1} readOnly />
      <IconButton onClick={handleClickAddition}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
}

export default QuantityFieldCart;
