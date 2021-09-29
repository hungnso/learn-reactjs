import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../api/productApi";
import SkeletonCategory from "../components/Filter/SkeletonCategory";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import ShortSkeleton from "../components/ShortSkeleton";

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "20px",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
}));

ListPage.propTypes = {};

function ListPage(props) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: Number.parseInt(params._sort) || "salePrice:ASC,id:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  // const [filter, setFilter] = useState(() => ({
  //   ...queryParams,
  //   // _page: Number.parseInt(queryParams._page) || 1,
  //   // _limit: Number.parseInt(queryParams._limit) || 9,
  //   // _sort: Number.parseInt(queryParams._sort) || "salePrice:ASC,id:ASC",
  // }));
  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   });
  // }, [history, filter]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        console.log(data, pagination);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handleChangePage = (e, page) => {
    //   setFilter((prevFilter) => ({
    //     ...prevFilter,
    //     _page: page,
    //   }));
    // };
    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleSortChange = (newSort) => {
    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   _sort: newSort,
    // }));
    const filters = {
      ...queryParams,
      _sort: newSort,
    };
    console.log(filters._sort);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handelFiltersChange = (newFilters) => {
    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const setNewFilters = (newFilters) => {
    // setFilter(newFilters);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              {loading ? <SkeletonCategory length={9} /> : <ProductFilters filters={queryParams} onChange={handelFiltersChange} />}
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ShortSkeleton /> : <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />}
              <FilterViewer filters={queryParams} onChange={setNewFilters} />

              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handleChangePage}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
