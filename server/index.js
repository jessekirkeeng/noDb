const express = require('express');
const cors = require('cors');
const { getFood, addFood, updateMenu, deleteMenu} = require('./controllers/menuController')
const { addOrder } = require('./controllers/orderController')

const app = express();
app.use(express.json());
app.use(cors())

app.get('/api/menu', getFood)

app.post('/api/menu' ,addFood)

app.post('/api/order' ,addOrder)

app.put('/api/menu/:id/:name' ,updateMenu)

app.delete('/api/menu/:id' ,deleteMenu)

app.listen(5050, () => console.log('listening on port 5050'));