import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from "@material-ui/core";
import PropTypes from "prop-types";
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
const renderCheckbox = ({
  input,
  label,
  children,
  meta: { touched, error },
  ...custom
}) => (
    <FormControl required  error={touched && error}>
    <FormControlLabel
      control={
        <Checkbox 
        checked={input.value ? true : false}
         onChange={input.onChange}
         {...custom}
          />
      }
      label={label}
    />

   {renderFromHelper({ touched, error })}
  </FormControl>


);
renderCheckbox.protoTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  error: PropTypes.bool
};
export default renderCheckbox;
