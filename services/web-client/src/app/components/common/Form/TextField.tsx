import React, { FC, useMemo } from "react";
import styles from "../../../scss/Login.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
import { IconProps } from "../../../../types/icons";

interface TextFieldProps {
  label: string;
  icon: React.FC<IconProps>;
  type: string;
  validation: UseFormRegisterReturn,
  value: string | undefined,
}

const TextField: FC<TextFieldProps> = ({
  label,
  icon: Icon,
  type,
  validation,
  value,
}) => {

  const isActive = useMemo(() => value && value.trim().length !== 0, [value]);
  
  return (
    <div
      className={`${styles.LoginInputBox} ${
        isActive ? styles.ActiveInput : ""
      }`}
    >
      <span>
        <Icon />
      </span>
      {
        <input
          type={type}
          {...validation}
        />
      }
      <label>{label}</label>
    </div>
  );
};

export default TextField;
