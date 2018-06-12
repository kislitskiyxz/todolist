const create_controller = require('../controllers/create_controller')

module.exports = (app) => {
    app.route('/').get(create_controller.getList);
    app.route('/').post(create_controller.updateList);
    app.route('/:todoId').delete(create_controller.deleteItem);
}
