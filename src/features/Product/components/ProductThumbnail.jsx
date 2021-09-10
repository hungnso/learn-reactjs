import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLAHO } from "../../../constants/common";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLAHO;

  return (
    <Box>
      <img
        src={thumbnailUrl}
        alt={product.name}
        width="100%"
        // height={290}
        // minHeight={290}
      />
    </Box>
  );
}

export default ProductThumbnail;
