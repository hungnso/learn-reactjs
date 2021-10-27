import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/form-controls/QuantityField/QuantityField";

AddToCardForm.propTypes = {};

function AddToCardForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup.number().required("Plese enter quatity").min(1, "Please enter than 1").typeError("Please enter the number"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    console.log(value);
    if (onSubmit) {
      await onSubmit(value);
    }

    form.reset();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form} />

        <Button type="submit" variant="contained" color="primary" fullWidth style={{ width: "250px" }}>
          Add To Card
        </Button>
      </form>
    </div>
  );
}

export default AddToCardForm;
