import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import Table from "../Layouts/Table";
import { makeStyles } from "@material-ui/styles";
import data from "../Inputs/orderData";
import columns from "../Inputs/tableHead";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 24,
    fontFamily: "playfair-display",
    fontWeight: "bold",
    color: "#359174"
  }
}));

export default function Order() {
  const classes = useStyles();
  const title = (
    <Typography className={classes.title}>Pending Orders</Typography>
  );
  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 60
      }}
    >
      <CssBaseline />

      <Table title={title} columns={columns} data={data} />
    </Container>
  );
}
