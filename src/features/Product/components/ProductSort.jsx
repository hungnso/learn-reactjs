import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    console.log(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Tabs value={currentSort} indicatorColor="primary" textColor="primary" onChange={handleSortChange}>
      <Tab label="Gia thấp tới cao" value="salePrice:ASC,id:ASC"></Tab>
      <Tab label="Gia cao tới thấp" value="salePrice:DESC,id:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
