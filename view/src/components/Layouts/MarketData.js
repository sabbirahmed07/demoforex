import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  typography: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "robot",
    color: "#FFFFFF"
  },
  paper: {
    width: 360,
    height: 220,
    backgroundColor: "#ACACAC"
  },
  box: {
    paddingTop: "22px"
  },
  button: {
    width: 150,
    height: 30,
    backgroundColor: "#0B69D5"
  }
}));

export default function MarketData(props) {
  const { symbol, ask, bid, arrow } = props;
  let style;
  if (arrow === "arrow_upward") {
    style = { color: "#38B28C" };
  } else {
    style = { color: "#B22E19" };
  }
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="center" className={classes.box}>
          <Grid item>
            <i className="material-icons" style={style}>
              {arrow}
            </i>
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>{symbol}</Typography>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.box}
          style={{ paddingLeft: 87 }}
        >
          <Grid item xs>
            <Paper
              style={{
                width: 50,
                height: 25,
                backgroundColor: "#B22E19"
              }}
            >
              <Typography className={classes.typography}>Bid</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper
              style={{
                width: 50,
                height: 25,
                backgroundColor: "#359174"
              }}
            >
              <Typography className={classes.typography}>Ask</Typography>
            </Paper>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.box}
          style={{ paddingBottom: 10 }}
        >
          <Grid item xs={5}>
            <Typography className={classes.typography}>
              <strong style={{ fontSize: 24 }}>{bid}</strong>0
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography className={classes.typography}>
              <strong style={{ fontSize: 24 }}>{ask}</strong>0
            </Typography>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#284E42"
                }}
              >
                View Chart
              </Typography>
            </Button>
          </Link>
        </Box>
      </Paper>
    </div>
  );
}
