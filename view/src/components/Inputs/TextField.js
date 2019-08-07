import React from "react";

import { TextField, makeStyles, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    // marginLeft: "40px",
    // marginRight: "40px",
    // paddingLeft: "10px",
    width: "450px",
    marginBottom: "20px"
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#BCE0FD !important",
    borderRadius: "20px"
  },
  inputlabel: {
    color: "#2699FB",
    fontWeight: "bold"
    // marginLeft: "40px",
    // paddingLeft: "15px"
  }
}));

export default function Text(props) {
  // console.log(props);
  const {
    label,
    placeholder,
    type,
    name,
    id,
    variant,
    margin,
    autoComplete,
    value,
    onChange,
    width,
    disable,
    min,
    max

    // errors
  } = props;
  const classes = useStyles();

  return (
    <div>
      <InputLabel className={classes.inputlabel}>{label}</InputLabel>
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          },
          inputProps: {
            min: min,
            max: max
          }
        }}
        id={id}
        placeholder={placeholder}
        className={classes.textField}
        margin={margin}
        variant={variant}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        style={{ width: width }}
        disabled={disable}
      />
    </div>
  );
}
