import bodyParser from "body-parser";
import express from "express";
import init from "../adapters/ca";

const route = express();

const jsonParser = bodyParser.json();
const adapter = init();

route.use(jsonParser);
route.get("/", adapter.hello.GetHelloHandler.bind(adapter.hello));
route.post("/users", adapter.users.CreateUserHandler.bind(adapter.users));
route.get("/users", adapter.users.GetAllUsersHandler.bind(adapter.users));

export default route;
