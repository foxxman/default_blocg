import React, { useState } from "react";
import styles from "../../../scss/Login.module.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  getIsModalOpen,
  toggleModal,
} from "../../../store/reducers/modalsReducers";
import { modalNames } from "../../../../types/modals";
import { useAppDispatch, useTypedSelector } from "../../../store";
import CloseOutlineIcon from "../../../assets/icons/CloseOutlineIcon";

const AuthModal = () => {
  const dispatch = useAppDispatch();

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const isOpen = useTypedSelector(getIsModalOpen(modalNames.auth));

  const changeForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogin((p) => !p);
  };

  return (
    <div className={`${styles.LoginBackground} ${!isOpen && styles.Close}`}>
      <div className={`${styles.LoginWrapper} ${isLogin && styles.Active} `}>
        <button
          onClick={() => dispatch(toggleModal(modalNames.auth))}
          className={styles.LoginClose}
        >
          <CloseOutlineIcon />
        </button>
        <LoginForm changeForm={changeForm} />
        <RegisterForm changeForm={changeForm} />
      </div>
    </div>
  );
};

export default AuthModal;
