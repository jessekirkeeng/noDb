import React, {Component} from 'react' 
import axios from 'axios'
import AddFood from './Components/AddFood';
import AddOrder from './Components/AddOrder';
import './App.css'

class App extends Component{
  constructor(){
    super();

    this.state = {
      menu: [],
      foodName: '',
      order: [],
      orderName: '',
    }
  }

  componentDidMount(req, res){
    axios.get('http://localhost:5050/api/menu')
    .then((res) => this.setState({menu: res.data}))
    .catch(err => console.log(err))
  }

  updateMenu = ( menu ) => {
    this.setState({ menu })
  }

  updateOrder = ( order ) => {
    this.setState({ order })
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
            <div className='menu'>{`${food.name}`}
            </div>
            <div>
            <input placeholder='Change Name' onChange={(e) => {this.setState({foodName: e.target.value})}}/> 
            <button onClick={() => this.updateFoodRequest(food.id)}>Submit</button>
            </div>
            <div>
            <button onClick={() => this.handleDelete(food.id)}>Delete Me!</button>
            </div>
            <div><AddOrder/></div>
            </div>
          )})}
        {this.state.order.map((cart) => {
          return (
            <div className='order'>{`${cart.name}`}</div>)})}
            <div ><AddFood updateMenu={this.updateMenu}/></div>
      </div>
    )}}

export default App