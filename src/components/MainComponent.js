import React, { Component } from 'react';
import {Route, Switch, Redirect,withRouter} from 'react-router-dom'
import MenuBar from './MenuBar.js'

import DishDetail from './DishDetail';
import Header from './HeaderComponent'
import Footer from './FooterComponent.js';
import Home from './Homecomponent';
import Contact from './ContactComponent.js';

import AboutUs from './AboutUsComponent.js'

import {connect} from 'react-redux'

import {addComment} from '../redux/ActionCreator'
 

const mapStateToProps = (state) => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});


class Main extends Component{

  constructor(props){
    super(props)

    
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
        <Home  dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      )
    }
    const DishwithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comm) => comm.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
        />

        
      )

    }

    


    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/menu" component={() => <MenuBar dishes={this.props.dishes} />}/>
          <Route path="/menu/:dishId" component={DishwithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route path="/aboutus" component={() => <AboutUs leaders={this.props.leaders} />}/>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
