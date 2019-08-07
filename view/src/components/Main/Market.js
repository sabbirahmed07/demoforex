import React from "react";

import { Container, Grid, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MarketData from "../Layouts/MarketData";

const useStyles = makeStyles(theme => ({
  head: {
    fontSize: 32,
    fontFamily: "playfair-display",
    fontWeight: "regular",
    color: "#954032",
    marginBottom: 30
  }
}));

export default function Market() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ paddingLeft: 60, marginTop: 10 }}>
      <CssBaseline />

      <Typography className={classes.head}>Market Watch -- 06:41:40</Typography>
      <Grid container spacing={4}>
        <Grid item lg>
          <MarketData
            symbol="EURUSD"
            arrow="arrow_upward"
            ask={1.1183}
            bid={1.1181}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="AUDUSD"
            arrow="arrow_upward"
            ask={1.1182}
            bid={1.1183}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="USDCHF"
            arrow="arrow_downward"
            ask={1.1132}
            bid={1.1153}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="GBPUSD"
            arrow="arrow_upward"
            ask={1.1152}
            bid={1.1153}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="USDCAD"
            arrow="arrow_downward"
            ask={1.1162}
            bid={1.1173}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="USDJPY"
            arrow="arrow_upward"
            ask={107.61}
            bid={108.81}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="AUDCAD"
            arrow="arrow_downward"
            ask={0.8973}
            bid={0.8979}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="AUDCAD"
            arrow="arrow_upward"
            ask={0.8973}
            bid={0.8979}
          />
        </Grid>
        <Grid item lg>
          <MarketData
            symbol="AUDCAD"
            arrow="arrow_downward"
            ask={0.8973}
            bid={0.8979}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
