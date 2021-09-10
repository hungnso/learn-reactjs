import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import FilterByCategory from "./Filter/FilterByCategory";
import FilterByPrice from "./Filter/FilterByPrice";
import FilterService from "./Filter/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  if (!onChange) return;
  const handleCategoryChange = (newCategory) => {
    console.log(newCategory);
    const newFilter = {
      ...filters,
      "category.id": newCategory.id,
      "category.name": newCategory.name,
    };
    console.log(newFilter);
    onChange(newFilter);
  };
  const handleChange = (values) => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterService filter={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
