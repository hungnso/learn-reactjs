import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLAHO } from "../../../constants/common";
import { useHistory } from "react-router-dom";

Productitem.propTypes = {
  product: PropTypes.object,
};

function Productitem(props) {
  const history = useHistory();
  const { product } = props;
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLAHO;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" height={290} minHeight={290} />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ``}
      </Typography>
    </Box>
  );
}

export default Productitem;
