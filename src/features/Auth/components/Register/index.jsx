import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";
import ProTypes from "prop-types";

Register.propTypes = {
  closeDialog: ProTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      value.username = value.email;

      const action = register(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log(user);

      // Đóng lại cửa số đăng kí thi thành công
      const { closeDialog } = props;

      if (closeDialog) {
        closeDialog();
      }
      /// thực hiện thông báo hiện đăng kí thành công
      enqueueSnackbar("Register successfully!!!", { variant: "success" });
    } catch (error) {
      console.log("Fail to register", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
