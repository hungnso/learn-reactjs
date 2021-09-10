import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import ProTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: ProTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      const action = login(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log(user);

      // Đóng lại cửa số đăng kí thi thành công
      const { closeDialog } = props;

      if (closeDialog) {
        closeDialog();
      }
      /// thực hiện thông báo hiện đăng kí thành công
    } catch (error) {
      console.log("Fail to register", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
