import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]} `,
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& > li": {
      margin: 0,
      marginTop: theme.spacing(1),
    },
  },
}));

FilterService.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterService({ filter = {}, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className={classes.list}>
        {[
          { value: "isPromotion", label: "Có khuyễn mãi" },
          { value: "isFreeShip", label: "Miễn phí vận chuyển" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filter[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterService;
