import React from "react";
import MaterialTable from "material-table";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  typography: {
    textTransform: "none",
    fontSize: 10,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: "#FFFFFF"
  }
}));

export default function Table(props) {
  const { title, data, columns } = props;
  const classes = useStyles();
  return (
    <MaterialTable
      style={{
        backgroundColor: "#c5d3e3",
        border: "#c5d3e3"
      }}
      title={title}
      columns={columns}
      data={data}
      actions={[
        {
          icon: "close",
          tooltip: "Close trade",
          onClick: (e, rowData) => alert("You deleted" + rowData.order)
        }
      ]}
      components={{
        Action: props => (
          <Button
            onClick={event => props.action.onClick(event, props.data)}
            variant="contained"
            style={{
              backgroundColor: "#EF3416"
            }}
            size="small"
          >
            <Typography className={classes.typography}>Close</Typography>
          </Button>
        )
      }}
      options={{
        headerStyle: {
          backgroundColor: "#B2ACAC"
        },
        actionsColumnIndex: -1
      }}
    />
  );
}
