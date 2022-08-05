import HelloFactory from "../app/hello/factories/factory";
import HelloHandlers from "../app/hello/handlers/handlers";
import UserHandlers from "../app/users/handlers/handlers";
import UserFactory from "../app/users/factories/factory";

type Handlers = {
  hello: HelloHandlers;
  users: UserHandlers;
};

function init(): Handlers {
  return {
    hello: HelloFactory(),
    users: UserFactory(),
  };
}

export default init;
