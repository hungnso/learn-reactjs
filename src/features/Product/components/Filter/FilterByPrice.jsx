import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]} `,
  },
  range: {
    display: "flex",
    flexFlow: "row nowrap",
    textAlign: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& > span": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  button: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    "& > button": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
  };
  const handleReset = () => {
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      </Box>
      <Box className={classes.button}>
        <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
          Áp dụng
        </Button>
        <Button variant="outlined" color="primary" size="small" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
