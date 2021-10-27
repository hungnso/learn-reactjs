import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    margin: theme.spacing(2, 0),
    listStyle: "none",
    "& > li ": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyễn mãi giá",
    isActive: (filters) => filters.isPromotion,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilter = { ...filters };
      if (newFilter.isPromotion) {
        delete newFilter.isPromotion;
      } else {
        newFilter.isPromotion = true;
      }
      return newFilter;
    },
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes("salePrice_gte") && Object.keys(filters).includes("salePrice_lte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilter = { ...filters };
      delete newFilter.salePrice_gte;
      delete newFilter.salePrice_lte;
      return newFilter;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `${filters["category.name"]}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes("category.name"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilter = { ...filters };
      delete newFilter["category.id"];
      delete newFilter["category.name"];

      return newFilter;
    },
    onToggle: () => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  console.log(filters);
  const classes = useStyles();

  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <div>
      <Box component="ul" className={classes.root}>
        {visibleFilter.map((x) => (
          <li key={x.id}>
            <Chip
              label={x.getLabel(filters)}
              color={x.isActive(filters) ? "primary" : "default"}
              clickable={!x.isRemovable}
              onClick={
                x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;
                      const newFilters = x.onToggle(filters);
                      onChange(newFilters);
                    }
              }
              onDelete={
                x.isRemovable
                  ? () => {
                      if (!onChange) return;
                      const newFilters = x.onRemove(filters);
                      onChange(newFilters);
                    }
                  : null
              }
            />
          </li>
        ))}
      </Box>
    </div>
  );
}

export default FilterViewer;
