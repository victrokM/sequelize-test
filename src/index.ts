import app from "./app";
import sequelize from "./database/database";
import model from "./models";
require("dotenv").config();

sequelize.addModels(model);

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(3000);
    console.log("Server running on port 3000");
  } catch (error) {
    console.log(error, "xd");
  }
}

main();
