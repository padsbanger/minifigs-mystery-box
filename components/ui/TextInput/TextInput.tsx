/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { TextInputProps } from "./TextInput.types";
import clsx from "clsx";

const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & InputHTMLAttributes<HTMLInputElement>
>(({ label, name, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col my-1">
      <label
        className="font-plus-jakarta-sans cursor-pointer text-white my-1 p-1"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={clsx(
          "font-plus-jakarta-sans p-2 active:shadow-lg focus:shadow-lg rounded-lg outline-none transition-shadow",
          { "border-solid border-2 border-red-500 ": Boolean(errorMessage) },
        )}
        ref={ref}
        id={name}
        name={name}
        {...rest}
      />
      {errorMessage ? (
        <span className="font-plus-jakarta-sans my-1 text-red-300">
          {errorMessage as string}
        </span>
      ) : null}
    </div>
  );
});

export default TextInput;
