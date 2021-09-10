import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  dislabel: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, dislabel } = props;
  const {
    formState: { errors },
  } = form;

  const [showPassWord, setShowPassWord] = useState(false);

  const toggleShowPassWord = () => {
    setShowPassWord((x) => !x);
  };

  return (
    <div>
      <FormControl
        error={!!errors[name]}
        margin="normal"
        fullWidth
        variant="outlined"
      >
        <InputLabel htmlFor="{name}">{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="{name}"
              type={showPassWord ? "text" : "password"}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassWord}
                    edge="end"
                  >
                    {showPassWord ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={dislabel}
              error={!!errors[name]}
            />
          )}
        />
        <FormHelperText> {errors[name]?.message} </FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
