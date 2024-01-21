import express from "express";
import cors from "cors";
import router from "./router";

const http = express()

http.use(express.json());

http.use(express.urlencoded({ extended: false }));
http.use(cors());

http.use("/api", router);

export default http;