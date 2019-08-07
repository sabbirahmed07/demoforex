import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import RadioFormLabel from "./RadioFormLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(2)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

export default function TimeRadioForm() {
  const classes = useStyles();
  const [value, setValue] = useState("Candlestick Chart");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <RadioFormLabel
            value="Bar Chart"
            control={<Radio />}
            label="Bar Chart"
          />
          <RadioFormLabel
            value="Candlestick Chart"
            control={<Radio />}
            label="Candlestick Chart"
          />
          <RadioFormLabel
            value="Line Chart"
            control={<Radio />}
            label="Line Chart"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
