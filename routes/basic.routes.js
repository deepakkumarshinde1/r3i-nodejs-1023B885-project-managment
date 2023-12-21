const BasicController = require("../controller/basic.controller");
const { noUpload, uploadFile } = require("./middleware");

const BasicRouter = require("express").Router();

BasicRouter.get("/", BasicController.homePage);
BasicRouter.get("/login", BasicController.loginPage);
BasicRouter.get("/new-registration", BasicController.registrationPage);
BasicRouter.get("/remove-user", BasicController.removeUsers);
BasicRouter.get("/logout", BasicController.logout);

BasicRouter.post("/save-user", BasicController.saveUser);
BasicRouter.post("/user-login", BasicController.userLogin);

BasicRouter.get("/api/get-product", BasicController.getProduct);
BasicRouter.post(
  "/api/save-new-product",
  uploadFile.single("pic"),
  BasicController.saveProduct
);

BasicRouter.delete("/api/remove-product/:id", BasicController.removeProduct);
module.exports = BasicRouter;
