import React from 'react'
import {Card, CardText, CardImgOverlay, CardImg, CardTitle, CardBody} from 'reactstrap'

import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

    function RenderMenu({dish , onClick})
    {
        return(
            <Card key={dish.id} >
                <Link to={`/menu/${dish.id}`}>
                        
                <CardImg width="100%" src={dish.image} alt={dish.name} />
            
                <CardImgOverlay>
                    <CardTitle>{dish.name}  </CardTitle>
               
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const MenuBar = (props) => {
        const menu = props.dishes.map( (dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                   <RenderMenu dish={dish}  />
                </div>
            );
    });

    
        
        return (
            <div class="container">
                <div class="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active >Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h4>Menu</h4>
                            <hr/>
                        </div>
                  
                </div>
                <div className="row">
                            {menu}
                </div>
                
                
            </div>
        );
    }




export default MenuBar