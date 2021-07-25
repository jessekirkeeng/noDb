import React, {Component} from 'react' 
import axios from 'axios'
import AddFood from './Components/AddFood';
import './App.css'

class App extends Component{
  constructor(){
    super();

    this.state = {
      menu: [],
      foodName: '',
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5050/api/menu')
    .then((res) => this.setState({menu: res.data}))
    .catch(err => console.log(err))
  }

  updateMenu = ( menu ) => {
    this.setState({ menu })
  }

  updateFoodState = (e) => {
    this.setState({foodName: e.target.value})
  }

  updateFoodRequest = (id) => {
    axios.put(`/api/menu/${id}/${this.state.foodName}`)
    .then(({ data }) => this.setState({ menu: data }))
    .catch((err) => console.log(err))
  }

  handleDelete = (id) => {
    axios.delete(`/api/menu/${id}`)
    .then(({ data }) => this.setState({ menu: data }))
    .catch((err) => console.log(err))
  }


  render(){
    return(
      <div>
        {this.state.menu.map((food) => {
          return (
            <div className='container-1'>
            <div className='menu'>{`${food.name}`}</div>
            <div>
            <input onChange={this.updateFoodState} placeholder='Change Name'/> 
            <button onClick={() => this.updateFoodRequest(food.id)}>Submit</button>
            </div>
            <button onClick={() => this.handleDelete(food.id)}>Delete Me!</button>
            </div>
          )})}
        <div ><AddFood updateMenu={this.updateMenu}/></div>
      </div>
    )
  }
}

export default App