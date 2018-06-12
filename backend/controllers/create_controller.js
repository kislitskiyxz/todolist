let array = [];
let counter = 1;
exports.getList = function (req, res) {
    console.log('GET succeeded');
    res.status(200).json(array);
    console.log(array);
};
exports.updateList = function (req, res) {
    const todo = {value: req.body.mytodo, id: counter};
    array.push(todo);
    counter++;
    console.log(array);
    res.status(200).json({id: counter});
};
exports.deleteItem = function (req, res) {
    let objId = req.params.todoId;
    console.log('DELETED');
    console.log(objId);
    let index = array.findIndex(function(todo){
        return todo.id === parseInt(objId);
    })
    if (index !== -1) array.splice(index, 1);
    console.log(index);
    console.log(array);
    res.sendStatus(200);

}