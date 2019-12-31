import React from 'react'
import {Card, CardText, CardImg, CardTitle, CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'



   
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

    const DishDetail = props => {
       
        if(props.dish == null)
        {
           return(
               <div>

               </div>
           ) 
        }
        return(
            <div class="container">
                <div class="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>{props.dish.name}</h4>
                        <hr/>
                    </div>
              
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>

                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comment={props.comments} />
                   
            </div>
                
                
               

            </div>
        </div>
        )

        // const Dish = this.renderDish(dish)
        // const comment = this.renderComments(dish.comments)

        

    }
 
export default DishDetail