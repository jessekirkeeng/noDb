import React from 'react'
import axios from 'axios'

export default class AddOrder extends React.Component {
    constructor(){
        super()
        this.state = {
            orderName: '',
}}
    
    addOrder = (req, res) => {
        const body =  { name: this.state.orderName }
        axios.post('/api/order', body)
        .then(res => this.props.updateOrder(res.data))
        .catch(err => console.log(err))
}
    
    handleInput = (e) => this.setState({orderName: e.target.value})    

    render(){
        return(
            <div>
            <button onClick={this.addOrder} onChange={this.handleInput} >Add to Cart</button>
            </div>
        )
    }
}
