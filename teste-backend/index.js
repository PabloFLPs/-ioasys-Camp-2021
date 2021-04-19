const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000);

app.get("/test", (request, response) => {
  return response.json({
    message: "API Running!",
    App: "Camp-21"
  });
});

//Execute "yarn #script-name#" tun run the .js files
//Execute "npm run #script-name#" tun run the .js files with the node_env format