const app = require("./src/config/express");

const port = app.get("port");

app.listen(port, () =>
  console.info(
    `Application currently running on port: ${port} for ${process.env.NODE_ENV}`
  )
);

//Execute "yarn #script-name#" tun run the .js files
//Execute "npm run #script-name#" tun run the .js files with the node_env format

//"NODE_ENV=production node myapp/app.js" -> doesnt work on Windows
//So, what i did is the usage of the "cross-env" package: "npm install --save-dev cross-env" and adding the "cross-env" in the scripts