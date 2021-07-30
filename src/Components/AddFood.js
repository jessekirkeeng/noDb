import React from 'react'
import axios from 'axios'

export default class AddFood extends React.Component {
    constructor(){
        super()
        this.state = {
            foodName: '',
        }}

    addFood = (req, res) => {
        const body =  { name: this.state.foodName }
        axios.post('/api/menu', body)
        .then(res => this.props.updateMenu(res.data))
        .catch(err => console.log(err))
    }

    handleInput = (e) => this.setState({foodName: e.target.value})

    render(){
        return(
            <div>
            <input onChange={this.handleInput} placeholder='Add Here'/>
            <button onClick={this.addFood}>Add to List</button>
            </div>
        )
    }
}