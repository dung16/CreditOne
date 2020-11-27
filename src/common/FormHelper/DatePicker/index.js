import { DatePicker } from "@material-ui/pickers";
import React from 'react';
const DateField = props => {
  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;
  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };
  return (
    <DatePicker
      {...inputProps}
      {...others}
      format="dd/MM/yyyy"
      value={value ? new Date(value) : null}
      disabled={submitting}
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      error={error && touched}
      onChange={onChange}
    />
  );
};
export default DateField;

