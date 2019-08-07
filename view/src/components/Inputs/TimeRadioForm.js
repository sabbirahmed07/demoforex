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
  const [value, setValue] = useState("5 Min");

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
          <RadioFormLabel value="1 Min" control={<Radio />} label="1 Min" />
          <RadioFormLabel value="5 Min" control={<Radio />} label="5 Min" />
          <RadioFormLabel value="15 Min" control={<Radio />} label="15 Min" />
          <RadioFormLabel value="30 Min" control={<Radio />} label="30 Min" />
          <RadioFormLabel value="1 Hour" control={<Radio />} label="1 Hour" />
          <RadioFormLabel value="4 Hour" control={<Radio />} label="4 Hour" />
          <RadioFormLabel value="1 Day" control={<Radio />} label="1 Day" />
          <RadioFormLabel value="1 Week" control={<Radio />} label="1 Week" />
          <RadioFormLabel value="1 Month" control={<Radio />} label="1 Month" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
