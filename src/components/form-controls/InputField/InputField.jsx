import React from "react";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import "./style.css";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  dislabel: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  fullname: {
    color: "red",
    fontSize: "35px",
  },
}));

function InputField(props) {
  const { form, name, label, dislabel } = props;
  const {
    formState: { errors },
  } = form;
  const classes = useStyles();
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          margin="normal"
          fullWidth
          className={classes.fullname}
          label={label}
          disabled={dislabel}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
