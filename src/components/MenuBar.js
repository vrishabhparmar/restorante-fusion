import React from 'react'
import {Card, CardText, CardImgOverlay, CardImg, CardTitle, CardBody} from 'reactstrap'
import DishDetail from './DishDetail';

    function RenderMenu({dish , onClick})
    {
        return(
            <Card key={dish.id} >
                        
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            
            <CardImgOverlay>
                <CardTitle>{dish.name}  </CardTitle>
               
            </CardImgOverlay>
            </Card>
        );
    }

    const MenuBar = (props) => {
        const menu = props.dishes.map( (dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                   <RenderMenu dish={dish} onClick={props.onClick} />
                </div>
            );
    });

    
        
        return (
            <div class="container">
                <div class="row">
                    
                        {menu}
                   
                   
                </div>
                
                
            </div>
        );
    }




export default MenuBar