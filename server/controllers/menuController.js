const data = require('../menu')
let menu = [...data.menu]

function addFood(req, res){
    let { name } = req.body
    menu.push({ name })
    res.status(200).send( menu )
}

function getFood(req, res){
    res.status(200).send(menu)
}

function updateMenu(req, res){
    // const { name } = req.body;
    // const updateName = req.params.id;
    // const foodID = menu.findIndex(foods => foods.id == updateName);
    // let foods = menu[foodID]

    let newFoodArr = menu.map(newName => {
        console.log(req.params.name, newName.id, req.params.id)
        if(+req.params.id === +newName.id){
            return { ...newName, name: req.params.name }}
        else{
            return newName}})
        menu = newFoodArr
        res.status(200).send(menu)
}

function deleteMenu(req, res){
    const deleteId = req.params.id;
    const foodID = menu.findIndex(food => food.id == deleteId);
    menu.splice(foodID, 1)
    res.status(200).send(menu)
}

module.exports = {
    addFood,
    getFood,
    updateMenu,
    deleteMenu,
}