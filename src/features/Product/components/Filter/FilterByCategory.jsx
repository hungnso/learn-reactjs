import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import categoryApi from "../../../../api/categoryApi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      transiton: "all 0.25s",
      "&:hover": {
        color: "orange",
        cursor: "pointer",
      },
    },
  },
  title: {
    color: "red",
  },
}));
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  console.log(categoryList);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const res = await categoryApi.getAll();
        console.log({ res });
        setCategoryList(
          res.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    console.log(category);
    if (onChange) {
      onChange(category);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        {" "}
        DANH MỤC SẢN PHẨM
      </Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2"> {category.name} </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
