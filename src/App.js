import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import MenuBar from './components/MenuBar'
import { DISHES } from './shared/dishes';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      dishes : DISHES
    }
  }

  render()
  {
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Restorante con fusion</NavbarBrand>

          </div>
        </Navbar>
        <MenuBar dishes={this.state.dishes}/>
        {/* dishes data is sent as props to the child components */}
      </div>
    );
  }
}

export default App;
