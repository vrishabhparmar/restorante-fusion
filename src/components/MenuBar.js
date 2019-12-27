import React, {Component} from 'react'
import {Card, CardText, CardImgOverlay, CardImg, CardTitle, CardBody} from 'reactstrap'
import DishDetail from './DishDetail';


class MenuBar extends Component{

    
    render()
    {
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}  </CardTitle>
                           
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        

        
        return(
            <div class="container">
                <div class="row">
                    
                        {menu}
                   
                   
                </div>
                
                
            </div>
        )
    }
}



export default MenuBar