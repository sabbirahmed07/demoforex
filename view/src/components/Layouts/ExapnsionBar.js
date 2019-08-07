import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TimeFrame from "../Inputs/TimeRadioForm";
import Chart from "../Inputs/ChartRadioFrom";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 40,
    marginTop: 30
  },
  group: {
    marginLeft: theme.spacing(0)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold"
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Timeframe</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TimeFrame />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Charts</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Chart />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
