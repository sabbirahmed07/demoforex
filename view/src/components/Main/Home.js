import React from "react";
import ExpansionBar from "../Layouts/ExapnsionBar";
import Chart from "../Layouts/CandleStickChart";
import {
  Grid,
  Box,
  Button,
  Typography,
  CssBaseline,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import * as actions from "../redux/actions/index";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    marginRight: "50px",
    marginTop: "30px",
    marginLeft: "50px"
  },
  button: {
    marginRight: 35,
    backgroundColor: "#9A9898",
    height: 40
  },
  box: {
    marginTop: 30,
    marginRight: 50
  }
}));

function Home(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" style={{ marginBottom: 30 }}>
      <CssBaseline />
      <Grid container>
        <Grid item xs>
          <ExpansionBar />
        </Grid>
        <Grid item xs className={classes.grid}>
          <Chart />
          {props.isAuth ? (
            <Box
              display="flex"
              justifyContent="flex-end"
              className={classes.box}
            >
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
              >
                <Typography
                  style={{ fontSize: 14, fontWeight: "bold", color: "#284E42" }}
                >
                  Market Order
                </Typography>
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
              >
                <Typography
                  style={{ fontSize: 14, fontWeight: "bold", color: "#0B69D5" }}
                >
                  Pending Order
                </Typography>
              </Button>
            </Box>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  actions
)(Home);
