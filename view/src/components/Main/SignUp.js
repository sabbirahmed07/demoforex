import React, { useState } from "react";
import MaterialUIForm from "react-material-ui-form";
import Text from "../Inputs/TextField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../redux/actions/index";

import {
  Button,
  Typography,
  makeStyles,
  Grid,
  Container,
  Box,
  CssBaseline
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: "center",
    color: "#4EB3E5",
    fontWeight: "regular",
    marginBottom: "40px",
    marginTop: "20px",
    fontSize: "40px",
    fontFamily: "playfair-display"
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff"
  }
}));

function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    ccv: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event });
  };

  const handleSubmit = async data => {
    await props.signUp(data);
    if (!props.errorMessage) {
      props.history.push("/login");
    }
  };
  return (
    <Container maxwidth="lg">
      <CssBaseline />

      <Typography className={classes.title}>Please Signup Here</Typography>

      <MaterialUIForm onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          alignContent="center"
          style={{ paddingLeft: 100 }}
        >
          <Grid item xs>
            <Text
              label="Name"
              placeholder="Enter Your Name"
              type="text"
              name="username"
              id="outlined-username-input"
              autoComplete="current-username"
              variant="outlined"
              margin="dense"
              value={values.username}
              onChange={handleChange("username")}
              // errors={errors.username}
            />
            <Text
              label="Email Address"
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              id="outlined-email-input"
              autoComplete="email"
              variant="outlined"
              margin="dense"
              onChange={handleChange("email")}
              value={values.email}
              // errors={errors.email}
            />

            <Text
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id="outlined-password-input"
              autoComplete="current-password"
              variant="outlined"
              margin="dense"
              onChange={handleChange("password")}
              value={values.password}
              // errors={errors.password}
            />

            <Text
              label="Confirm Password"
              placeholder="Confirm Your Password"
              type="password"
              name="confirmPassword"
              id="outlined-confirmPassword-input"
              autoComplete="current-password"
              variant="outlined"
              margin="dense"
              onChange={handleChange("confirmPassword")}
              value={values.confirmPassword}
              // errors={errors.confirmPassword}
            />

            <Text
              label="Address"
              placeholder="Enter Your Address"
              type="text"
              name="address"
              id="outlined-address"
              variant="outlined"
              margin="dense"
              autoComplete="current-address"
              onChange={handleChange("address")}
              value={values.address}
            />
            <Text
              label="Country"
              placeholder="Enter Your Contry"
              type="text"
              name="country"
              id="outlined-country"
              variant="outlined"
              margin="dense"
              autoComplete="country"
              value={values.country}
              onChange={handleChange("country")}
            />
          </Grid>
          <Grid item xs>
            <Text
              label="City"
              placeholder="City"
              type="text"
              name="city"
              id="outlined-city-input"
              variant="outlined"
              margin="dense"
              autoComplete="city"
              onChange={handleChange("city")}
              value={values.city}
            />

            <Text
              label="Zip Code"
              placeholder="Zip"
              type="text"
              name="zip"
              id="outlined-zip-input"
              variant="outlined"
              margin="dense"
              autoComplete="zip"
              onChange={handleChange("zip")}
              value={values.zip}
            />
            <Text
              disable
              label="Card"
              value="VISA"
              variant="outlined"
              margin="dense"
            />
            <Text
              label="Card Number"
              placeholder="Enter Your Card Number"
              type="text"
              name="cardNumber"
              id="outlined-card-input"
              autoComplete="current-card"
              variant="outlined"
              margin="dense"
              onChange={handleChange("cardNumber")}
              value={values.cardNumber}
              // errors={errors.cardNumber}
            />

            <Text
              label="Expiration Date"
              placeholder="Select Date For Your Card Expiration"
              type="date"
              name="expirationDate"
              id="outlined-date-input"
              autoComplete="current-expiration-date"
              variant="outlined"
              margin="dense"
              onChange={handleChange("expirationDate")}
              value={values.expirationDate}
              // errors={errors.expirationDate}
            />

            <Text
              label="CCV"
              placeholder="CCV"
              type="number"
              name="ccv"
              id="outlined-ccv"
              variant="outlined"
              margin="dense"
              autoComplete="ccv"
              onChange={handleChange("ccv")}
              value={values.ccv}
              // errors={errors.ccv}
              min={100}
              max={999}
            />
          </Grid>
        </Grid>
        {props.errorMessage ? (
          <Typography style={{ color: "red", marginLeft: 100 }}>
            {props.errorMessage}
          </Typography>
        ) : null}
        <Box display="flex" justifyContent="center">
          <Button type="submit" variant="contained" className={classes.button}>
            <Typography
              style={{ fontSize: 24, fontWeight: "bold", color: "#4EB3E5" }}
            >
              Submit
            </Typography>
          </Button>
        </Box>
      </MaterialUIForm>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SignUp));
