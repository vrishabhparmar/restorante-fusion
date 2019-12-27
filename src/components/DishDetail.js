import React from 'react'
import {Card, CardText, CardImg, CardTitle, CardBody} from 'reactstrap'



   
    function RenderComments({comment})
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

    function RenderDish({dish})
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

    const DishDetail = props => {
        const dish = props.dish;
        if(dish == null)
        {
            return(
                <div>

                </div>
            )
        }

        // const Dish = this.renderDish(dish)
        // const comment = this.renderComments(dish.comments)

        return(
            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>

                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comment={dish.comments} />
                       
                    </div>
                    
                    
                   

                </div>
            </div>
            
        )

    }
   

        
       


        
       
    




export default DishDetail