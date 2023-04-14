/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

const app = require("./app");
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App Run at http://localhost:8080");
});
