function mainController() {
    return {
        index(req, res) {
            return res.render("math")
        }
    }
}
module.exports = mainController;