import { Box, FormHelperText, IconButton, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  dislabel: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    maxWidth: "200px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  text: {
    "& > input": {
      textAlign: "center",
    },
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, dislabel } = props;
  const {
    formState: { errors },
    setValue,
  } = form;

  return (
    <div>
      <FormControl error={!!errors[name]} margin="normal" fullWidth variant="outlined" size="small">
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <Box className={classes.box}>
              <IconButton onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput {...field} id="{name}" type="number" disabled={dislabel} error={!!errors[name]} className={classes.text} />
              <IconButton onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) + 1 : 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText> {errors[name]?.message} </FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
