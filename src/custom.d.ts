declare module "*.scss";
import Dotenv from "dotenv-webpack";
module.exports = {
  plugins: [new Dotenv()],
};
