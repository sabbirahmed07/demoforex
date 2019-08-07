import React, { useState } from "react";
import MaterialUIForm from "react-material-ui-form";
import Text from "../Inputs/TextField";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

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
    backgroundColor: "#ffffff",
    marginLeft: 150
  }
}));

function Login(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event });
  };

  const handleSubmit = async data => {
    await props.signIn(data);
    if (!props.errorMessage) {
      props.history.push("/");
    }
  };

  const responseGoogle = async res => {
    console.log("responseGoogle", res);
    await props.oauthGoogle(res.accessToken);
    if (!props.errorMessage) {
      props.history.push("/");
    }
  };

  const responseFacebook = async res => {
    await props.oauthFacebook(res.accessToken);
    if (!props.errorMessage) {
      props.history.push("/");
    }
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <CssBaseline />

      <Typography className={classes.title}>
        Please Login To Continue
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs>
          <MaterialUIForm onSubmit={handleSubmit}>
            <Text
              label="Email Address"
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              id="outlined-email-input"
              variant="outlined"
              autoComplete="email"
              margin="dense"
              onChange={handleChange("email")}
              value={values.email}
            />

            <Text
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id="outlined-password-input"
              variant="outlined"
              autoComplete="password"
              margin="dense"
              onChange={handleChange("password")}
              value={values.password}
            />
            <Link to="/forget">
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  color: "#4EB3E5",
                  paddingRight: 300
                }}
              >
                Forget Password?
              </Typography>
            </Link>
            {props.errorMessage ? (
              <Typography
                style={{ color: "red", marginRight: 220, marginTop: 20 }}
              >
                {props.errorMessage}
              </Typography>
            ) : null}
            <Box display="flex">
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
              >
                <Typography
                  style={{ fontSize: 24, fontWeight: "bold", color: "#4EB3E5" }}
                >
                  Submit
                </Typography>
              </Button>
            </Box>
          </MaterialUIForm>
        </Grid>
        <Grid item xs>
          <Typography style={{ color: "green", fontSize: 24 }}>
            You can also login using third party services
          </Typography>
          <div style={{ marginLeft: 130, marginTop: 30 }}>
            <GoogleLogin
              className="btn btn-outline-danger"
              clientId="652887277476-vfgmboeafukqmc3nc73cmfv51ejv9nks.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />

            <FacebookLogin
              appId="687067451767005"
              //autoLoad={false}
              textButton="Facebook"
              fields="name,email,picture"
              callback={responseFacebook}
              size="small"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(Login));
