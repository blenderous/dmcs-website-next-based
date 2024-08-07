"use client";

import clsx from "clsx";
// import { sendEmail } from "@/app/utils/send-email";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendEmail } from "@/app/utils/useSendEmail";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  name: string;
  emailId: string;
};

export default function ContactForm() {
  const [success, loading, expandButton, error, handleSendEmail] =
    useSendEmail();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    handleSendEmail(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md">
      <div className="mb-5 flex gap-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-lg text-brand-brown"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="block w-full rounded-lg border-2 border-brand-brown bg-gray-50 p-2.5 text-lg text-brand-brown focus:border-brand-dark-brown focus:ring-brand-dark-brown"
            placeholder=""
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="text-red-400">Please enter your first name</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-lg text-brand-brown"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="block w-full rounded-lg border-2 border-brand-brown bg-gray-50 p-2.5 text-lg text-brand-brown focus:border-brand-dark-brown focus:ring-brand-dark-brown"
            placeholder=""
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="text-red-400">Please enter your last name</p>
          )}
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="emailId"
          className="mb-2 block text-lg text-brand-brown"
        >
          Your email
        </label>
        <input
          type="email"
          id="emailId"
          className="block w-full rounded-lg border-2 border-brand-brown bg-gray-50 p-2.5 text-lg text-brand-brown focus:border-brand-dark-brown focus:ring-brand-dark-brown"
          placeholder=""
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && (
          <p className="text-red-400">Please enter a valid email</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-2 block text-lg text-brand-brown"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="block w-full rounded-lg border-2 border-brand-brown bg-gray-50 p-2.5 text-lg text-brand-brown focus:border-brand-dark-brown focus:ring-brand-dark-brown"
          placeholder=""
          rows={4}
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="text-red-400">Please enter your message</p>
        )}
      </div>
      <label className="ohnohoney" htmlFor="name"></label>
      <input
        className="ohnohoney"
        autoComplete="off"
        type="text"
        id="name"
        placeholder="Your name here"
        tabIndex={-1}
        {...register("name")}
      />
      <label className="ohnohoney" htmlFor="email"></label>
      <input
        className="ohnohoney"
        autoComplete="off"
        type="email"
        id="emailId"
        placeholder="Your e-mail here"
        tabIndex={-1}
        {...register("emailId")}
      />
      <div className="flex items-center">
        <div className="">
          <button
            type="submit"
            className={clsx("btn", {
              "w-40": !expandButton,
              "w-56": expandButton,
            })}
            disabled={expandButton}
          >
            <span className="flex items-center">
              <span>Submit</span>
              {loading && <span className="loading-spinner ml-4"></span>}
            </span>
          </button>
        </div>
        {success && !loading && (
          <p className="ml-5">Form submitted successfully!</p>
        )}
        {error && !loading && (
          <p className="ml-5 text-red-400">Oops! Something went wrong.</p>
        )}
      </div>
    </form>
  );
}
