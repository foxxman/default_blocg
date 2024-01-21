import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../scss/Login.module.scss";
import TextField from "../../common/Form/TextField";
import MailIcon from "../../../assets/icons/MailIcon";
import LockClosedIcon from "../../../assets/icons/LockClosedIcon";
import { FORM_FIELDS, ILoginForm } from "../../../../types/auth";
import { useAppDispatch } from "../../../store";

interface ILogin {
  changeForm: (e: React.FormEvent) => void;
}

const LoginForm: FC<ILogin> = ({ changeForm }) => {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ILoginForm>();

  const formData = watch();

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    // dispatch(signUp(data))
  };

  return (
    <div className={`${styles.LoginFormBox} ${styles.Login}`}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* MAIL */}
        <TextField
          label="Email"
          icon={MailIcon}
          type="email"
          validation={register(FORM_FIELDS.EMAIL)}
          value={formData[FORM_FIELDS.EMAIL]}
        />
        {/* PASSWORD */}
        <TextField
          label="Password"
          icon={LockClosedIcon}
          type="password"
          validation={register(FORM_FIELDS.PASSWORD)}
          value={formData[FORM_FIELDS.PASSWORD]}
        />

        {/* SUBMIT */}
        <button type="submit" className={styles.LoginSubmit}>
          Sign In
        </button>

        <button onClick={changeForm} className={styles.LoginChangeForm}>
          Don't have an account?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
