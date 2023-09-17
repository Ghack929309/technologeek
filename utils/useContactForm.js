import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data, e) => {
    const fieldsValue = [data.name, data.email, data.message, data.subject];
    const formIsValid = fieldsValue.every((field) => field !== "");
    if (!formIsValid) return alert("Please fill all the fields");

    await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    reset,
    setMessage,
    setIsSuccess,
    errors,
    isSubmitSuccessful,
    isSubmitting,
    message,
    isSuccess,
  };
};
