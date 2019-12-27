import React, { Component } from 'react';
import MenuBar from './MenuBar.js'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail';
import Header from './HeaderComponent'
import Footer from './FooterComponent.js';

class Main extends Component{

  constructor(props){
    super(props)

    this.state = {
      dishes : DISHES,
      selectedDish : null,
      
    }
    
  }
  onSelectDish(dishId)
    {
        this.setState(() => {
            return({
                selectedDish: dishId
                
                

            }
               
            )
        })
       
    }

  render()
  {
    return(
      <div className="App">
        <Header/>
        <MenuBar dishes={this.state.dishes} onClick={(dishId) => this.onSelectDish(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        {/* dishes data is sent as props to the child components */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
