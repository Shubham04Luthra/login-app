import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-indigo",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={` text-center leading-5.42  items-center font-poppins   justify-center   rounded-2xl ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
