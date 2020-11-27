import React from 'react';
import { Input } from '@material-ui/core';
import ProTypes from 'prop-types';
const renderInput = ({
    placeholder,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <Input
            placeholder={placeholder}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
    renderInput.protoTypes = {
    placeholder: ProTypes.string,
    input: ProTypes.object,
    meta: ProTypes.object,
}
export default renderInput;