import React, { useId, useState } from "react";

const Input = function Input({
  label,
  type = "text",
  className = "",
  image,
  value,
  onChange,
  ...props
}) {
  const id = useId();
  const [visiblity, setVisibilty] = useState(false);
  return (
    <div className=" rounded-2xl p-4 gap-7 h-19  bg-offWhite flex  ">
      <div className="  flex   items-center ">
        <img
          className="h-6 w-6  mobile:w-10 mobile:h-10 mobile:object-contain   "
          src={`/${image}`}
          alt="image"
        />
      </div>
      <div className="   w-full   relative  ">
        <div className="flex flex-col gap-1 ">
          {label && (
            <label
              className="  font-normal font-poppins leading-4 text-base text-darkPurple "
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type === "password" && visiblity ? "text" : type}
            {...props}
            id={id}
            className={` bg-offWhite font-poppins font-bold text-base text-darkPurple focus:outline-none  pr-3   ${className}`}
          />
        </div>
        {type === "password" ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {" "}
            <img
              onClick={() => {
                setVisibilty(!visiblity);
              }}
              className="h-5 w-5  mobile:w-4 mobile:h-4 "
              src="/visibility.png"
              alt="image"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
