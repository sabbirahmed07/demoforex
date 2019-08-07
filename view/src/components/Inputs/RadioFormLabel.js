import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function RadioFormLabel(props) {
  const { value, control, label } = props;
  return (
    <div>
      <FormControlLabel value={value} control={control} label={label} />
    </div>
  );
}
