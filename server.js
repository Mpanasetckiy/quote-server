const express = require("express");
const app = express();

const quotesRoutes = require("./quotes-route");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.use("/", quotesRoutes);

//Start our server so that it listens for HTTP requests!
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port: " + (process.env.PORT || 5000));
});
