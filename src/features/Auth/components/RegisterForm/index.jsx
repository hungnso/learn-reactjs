import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Typography,
  makeStyles,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "../../../../components/form-controls/PasswordField/PasswordField";
import InputField from "../../../../components/form-controls/InputField/InputField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 2, 0),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    padding: theme.spacing(1.5),
  },
  fullname: {
    color: "red",
  },
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter the FullName")
      .test(
        "should has at least two words",
        "Please enter at least two words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Plese enter the email")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Plese enter the password")
      .min(6, "Please enter ai least 6 changer"),
    retypePassWord: yup
      .string()
      .required("Please retype your password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassWord: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }

    form.reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Accout
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="fullName"
          label="FullName"
          form={form}
          className={classes.fullname}
        />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="PassWord" form={form} />
        <PasswordField
          name="retypePassWord"
          label="ReTypePassWord"
          form={form}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Creat an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
