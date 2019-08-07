import React from "react";
import { CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  text: {
    color: "red"
  }
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography variant="h1" component="h2" className={classes.text}>
        Sorry, Page Not Found
      </Typography>
    </div>
  );
}
