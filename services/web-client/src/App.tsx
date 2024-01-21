import React, {useEffect} from "react";
import { ToastContainer } from "react-toastify";
import Container from "./app/components/common/Container";
import Header from "./app/components/ui/Header/Header";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./app/pages/BlogPage";
import AuthModal from "./app/components/ui/Login/AuthModal";
import socketService from "./app/services/socket";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./app/scss/App.module.scss";

function App() {
  
  useEffect(() => {
    socketService.initConnection();
  }, [])

  return (
    <div className={styles.App}>
      <Container>
        <Header />

        <AuthModal />

        <Routes>
          <Route path="/" Component={BlogPage} />
          {/* <Route path="/login" Component={LoginPage} /> */}
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
