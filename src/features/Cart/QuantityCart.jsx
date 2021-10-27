import React from "react";
import QuantityFieldCart from "../../components/form-controls/QuantityField/QuantityFieldCart";

QuantityCart.propTypes = {};

function QuantityCart({ product = {} }) {
  return (
    <div>
      <QuantityFieldCart product={product} />
    </div>
  );
}

export default QuantityCart;
