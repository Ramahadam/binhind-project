"use client";
import { useFormik } from "formik";
import { useAddSubscriberMutation } from "../_services/binhindApi";
import SpinnerSmall from "./SpinnerSmall";
import Message from "./Message";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const { t } = useTranslation();
  const [addSubscriber, { isLoading, isSuccess, isError, error, data }] =
    useAddSubscriberMutation(undefined, { suspense: true });

  // Validate input
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  // Handle submit form
  async function handleSubmitSubscription(values) {
    const email = values;

    try {
      await addSubscriber(email).unwrap();
    } catch (error) {}
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: handleSubmitSubscription,
  });

  return (
    <>
      {isLoading && <SpinnerSmall />}
      {isSuccess && <p>✅ Subscription successful!</p>}
      {isError && (
        <p className="bg-red-500">
          ❌ {error.data?.error?.message || "Something went wrong"}
        </p>
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex items-center rounded-sm py-1 pr-2 relative"
      >
        <input
          id="newsletter"
          placeholder="Email"
          className="outline-0 pl-2"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <span className="absolute bg-primary text-white -top-8 z-50">
            {formik.errors.email}
          </span>
        ) : null}

        <button
          type="submit"
          className="bg-primary text-white rounded-sm px-3 py-1 cursor-pointer"
        >
          {t("subscribe")}
        </button>
      </form>
    </>
  );
};

export default SignupForm;
