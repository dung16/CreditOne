import React from 'react';
import { TextField } from '@material-ui/core';
import ProTypes from 'prop-types';
const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField 
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      inputProps={input}
      {...custom}
    />
  )
  renderTextField.protoTypes={
      label:ProTypes.string,
      input:ProTypes.object,
      meta:ProTypes.object,
  }
  export default renderTextField;