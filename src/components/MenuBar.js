import React, {Component} from 'react'
import {Card, CardText, CardImgOverlay, CardImg, CardTitle, CardBody} from 'reactstrap'


class MenuBar extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            selectedDish : null
        }

    }
    onSelectDish(dish)
    {
        this.setState({selectedDish: dish})
    }


    renderDish(dish)
    {
        if(dish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else
        {
            return(
                <div></div>
            );

        }

    }

    render()
    {
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onSelectDish(dish)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>

                </div>
            </div>
        )
    }
}

export default MenuBar