import { FormControl, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import ProTypes from 'prop-types';
import React from 'react';
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
const renderSelectField = ({
  input,
  label,
  name,
  meta: { touched, error,invalid },
  children,
  ...custom
}) => (
  <FormControl  error={touched && invalid} style={{width:"100%"}}>
    <Select
      native
      {...input}
      {...custom}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
renderSelectField.protoTypes = {
    error:ProTypes.string,
    label: ProTypes.string,
    input: ProTypes.object,
    meta: ProTypes.object,
    children: ProTypes.object,

}
export default renderSelectField;