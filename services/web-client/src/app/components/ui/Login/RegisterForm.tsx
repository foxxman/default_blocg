import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../scss/Login.module.scss";
import { FORM_FIELDS, IRegisterForm } from "../../../../types/auth";
import TextField from "../../common/Form/TextField";
import PersonIcon from "../../../assets/icons/PersonIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import LockClosedIcon from "../../../assets/icons/LockClosedIcon";
import { useAppDispatch } from "../../../store";
import signUpRequest from "../../../store/thunk/user/signUpRequest";

interface IRegister {
  changeForm: (e: React.FormEvent) => void;
}

const RegisterForm: FC<IRegister> = ({ changeForm }) => {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IRegisterForm>();

  const formData = watch();

  const onSubmit = (data: IRegisterForm) => {
    dispatch(signUpRequest(data))
  };
  
  return (
    <div className={`${styles.LoginFormBox} ${styles.Register}`}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <TextField
          label="Login"
          icon={PersonIcon}
          type="text"
          validation={register(FORM_FIELDS.LOGIN)}
          value={formData[FORM_FIELDS.LOGIN]}
        />
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
        {/* REPEAT PASSWORD */}
        <TextField
          label="Repeat your password"
          icon={LockClosedIcon}
          type="password"
          validation={register(FORM_FIELDS.PASSWORD_REPEAT)}
          value={formData[FORM_FIELDS.PASSWORD_REPEAT]}
        />
        {/* SUBMIT */}
        <button type="submit" className={styles.LoginSubmit}>
          Sign Up
        </button>

        <button onClick={changeForm} className={styles.LoginChangeForm}>
          Already have an account?
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
