import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import CartList from "./CartList";
import CartTotle from "./CartTotal";

CartFeatuer.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  left: {
    flex: "1 1 0",
    padding: "20px",
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    width: "300px",
    padding: theme.spacing(1.5),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "20px",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function CartFeatuer(props) {
  const classes = useStyle();

  return (
    <Box>
      <Container className={classes.root}>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <CartList />
            </Grid>
            <Grid item className={classes.right}>
              <CartTotle />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default CartFeatuer;
