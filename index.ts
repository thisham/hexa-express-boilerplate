// import { appendFile } from "fs";
import route from "./src/routes";

// route.engine("hbs", () => hbs.registerPartials(__dirname + "/views/partials"));

route.listen(3000);
