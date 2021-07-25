import React from 'react'
import axios from 'axios'

export default class AddFood extends React.Component {
    constructor(){
        super()
        this.state = {
            foodName: '',
        }
    }
    
    // reset=(e)=>{
    //     this.setState({
    //     foodName:''
    // })}

    handleInput = (e) => this.setState({foodName: e.target.value})

    addFood = (req, res) => {
        const body =  { name: this.state.foodName }
        axios.post('/api/menu', body)
        .then(res => this.props.updateMenu(res.data))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <input onChange={this.handleInput} onSubmit={this.reset} placeholder='Add Here'/>
            <button onClick={this.addFood} color='red'>Add Food!</button>
            </div>
        )
    }
}
