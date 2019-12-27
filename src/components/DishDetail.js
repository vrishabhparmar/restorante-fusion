import React, {Component} from 'react'
import {Card, CardText, CardImgOverlay, CardImg, CardTitle, CardBody} from 'reactstrap'

class DishDetail extends Component
{
   
    renderComments(comment)
    {

       
        if(comment != null)
        {
           const com = comment.map(values => {
               return(
                   <div>
                       <ul key={values.id} class="list-unstyled">
                       <li>{values.comment}</li>
                       <li>----{values.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(values.date)))}</li>
                       
                       </ul>
                       
                   </div>
               )
           })

           return(
               <div>
                    <h1>Comments</h1>
                    {com} 
               </div>
           )
        } 
        else{
            return(
                <div>
                   
                </div>
            )
        }

        
    
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
                        <CardText>{dish.description} {dish.comments.comment}</CardText>
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

        const dish = this.props.dish;
        if(dish == null)
        {
            return(
                <div>

                </div>
            )
        }

        const Dish = this.renderDish(dish)
        const comment = this.renderComments(dish.comments)
       


        
        return(
            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {Dish}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comment}
                       
                    </div>
                    
                    
                   

                </div>
            </div>
            
        )
    }
}




export default DishDetail