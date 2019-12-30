import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import MenuBar from './MenuBar.js'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail';
import Header from './HeaderComponent'
import Footer from './FooterComponent.js';
import Home from './Homecomponent';
import Contact from './ContactComponent.js';
import {LEADERS} from '../shared/Leaders.js';
import {COMMENTS} from '../shared/Comments.js'
import {PROMOTIONS} from '../shared/Promotion.js'




class Main extends Component{

  constructor(props){
    super(props)

    this.state = {
      dishes : DISHES,
      // selectedDish : null,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS

      
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

    const Homepage = () => {
      return(
        <Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      )
    }
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/menu" component={() => <MenuBar dishes={this.state.dishes} />}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        {/* <MenuBar dishes={this.state.dishes} onClick={(dishId) => this.onSelectDish(dishId)}/> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
        {/* dishes data is sent as props to the child components */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
