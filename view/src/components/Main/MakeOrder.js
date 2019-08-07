import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import MaterialUIForm from "react-material-ui-form";

import Text from "../Inputs/TextField";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    color: "#4EB3E5",
    fontWeight: "regular",
    marginBottom: "40px",
    marginTop: "20px",
    fontSize: "40px",
    fontFamily: "playfair-display"
  }
}));

export default function MakeOrder() {
  const [values, setValues] = useState({
    currency: ""
  });
  const classes = useStyles();

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event
    });
  };
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Typography className={classes.title}>
        Place Your Order Carefully
      </Typography>
      <Grid container direction="row">
        <Grid item xs>
          Hello
        </Grid>
        <Grid item xs>
          <MaterialUIForm>
            <Grid container direction="column">
              <Grid item xs={12} />
            </Grid>
          </MaterialUIForm>
        </Grid>
      </Grid>
    </Container>
  );
}
