import React, {Component} from 'react'
import {Nav,NavItem,Collapse,NavbarToggler,Navbar, NavbarBrand,Jumbotron} from 'reactstrap'
import {NavLink} from 'reactstrap'
class Header extends Component
{

    constructor(props)
    {
        super(props)
        this.state ={
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render()
    {
        return(
            /// It allows us to render multiple components
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                            <NavbarToggler onClick={this.toggleNav}/>
                            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" href="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  href="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                        <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                        </div>
                    </div>
                </Jumbotron>

            </React.Fragment>
        )
    }
}


export default Header