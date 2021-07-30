const data = require('../order')
let menu = [...data.order]

function addOrder(req, res){
    let { name } = req.body
    order.push({ name })
    res.status(200).send( order )
}

module.exports = {
    addOrder,
}