import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";
import { formatPrice } from "../../utils";

CartTotal.propTypes = {};

function CartTotal(props) {
  const total = useSelector(cartTotalSelector);
  return <div>Tổng tiền : {formatPrice(total)}</div>;
}

export default CartTotal;
