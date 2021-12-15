const mainController = require("../app/controller/mainController");

function initRoutes(app) {
    app.get('/', mainController().index);
}
module.exports = initRoutes;