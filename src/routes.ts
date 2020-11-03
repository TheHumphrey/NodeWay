import { Router } from "express";

import data from "./database";

const routes = Router();

let dataBase = data();

routes.get("/ativo", async (request, response) => {
  return response.status(200).json(dataBase);
});

export default routes;
