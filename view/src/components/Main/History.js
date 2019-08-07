import React from "react";
import {
  Typography,
  List,
  ListItem,
  CssBaseline,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import data from "../Inputs/orderData";
import columns from "../Inputs/tableHead";
import Table from "../Layouts/Table";

const useStyles = makeStyles(theme => ({
  head: {
    fontSize: 40,
    fontFamily: "playfair-display",
    fontWeight: "regular"
  },
  typography: {
    fontSize: 24,
    fontFamily: "playfair-display",
    fontWeight: "regular",
    marginRight: 40,
    width: 150
  },
  valueTypo: {
    fontSize: 24,
    fontFamily: "roboto",
    fontWeight: "bold",
    marginLeft: 40,
    width: 150,
    textAlign: "right"
  },
  title: {
    fontSize: 24,
    fontFamily: "playfair-display",
    fontWeight: "bold",
    color: "#359174"
  }
}));

export default function History() {
  const classes = useStyles();
  const title = (
    <Typography className={classes.title}>Previous Orders</Typography>
  );
  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 20
        // marginLeft: 50,
        // paddingRight: 120
      }}
    >
      <CssBaseline />
      <div>
        <Typography className={classes.head}>Account History</Typography>
      </div>
      <List style={{ marginBottom: 30, marginLeft: 40 }}>
        <ListItem>
          <Typography className={classes.typography}>Credit</Typography>
          <span>:</span>
          <Typography className={classes.valueTypo}>0.00 $</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Deposit</Typography>
          <span>:</span>
          <Typography className={classes.valueTypo}>50 000.00 $</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.typography}>Withdrawal</Typography>
          <span>:</span>
          <Typography className={classes.valueTypo}>0.00 $</Typography>
        </ListItem>
      </List>
      <Table title={title} columns={columns} data={data} />
    </Container>
  );
}
