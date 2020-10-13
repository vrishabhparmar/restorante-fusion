import React, { Component } from 'react'
import {Card, CardText, CardImg, CardTitle, CardBody,Breadcrumb,BreadcrumbItem, Button , Modal, ModalBody, ModalHeader, Label, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm, Control, Errors} from 'react-redux-form'
import Loading from './LoadingComponent'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
    
    function RenderComments({comment,addComment, dishId})
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
                    
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
    class CommentForm extends Component{

        constructor(props){
            super(props)

            this.state = {
                isModalOpen: false
            }
            this.toggleModal = this.toggleModal.bind(this)
        }

        toggleModal(){
            this.setState({
                isModalOpen : !this.state.isModalOpen
            })
        }

        handleSubmit(values){
           
           this.props.addComment(this.props.dishId,values.rating ,values.name,values.comments)
            
        }

        render(){
            return(
                <div className="row">
                    <div className="col-12">
                    <div className="row">
                        <Button onClick={this.toggleModal} outline color="secondary "className="m-2"><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                    
                    </div>   
                    <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
                        <ModalHeader>
                            Submit Comments
                        </ModalHeader>
                        <ModalBody className="m-2">
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" name="name" 
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)

                                        }}
                                        />

                                        <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages = {{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }

                                        }

                                        />

                                       
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comments">Comments</Label>
                                    <Control.textarea model=".comments" name="comments" 
                                        className="form-control" rows="6"/>

                                       
                                </Row>
                                <Row className="form-group">
                                  
                                    <Button type="submit" color="primary">Submit</Button>
                                  
                                   

                                       
                                </Row>



                            </LocalForm>
                            

                        </ModalBody>
                    </Modal>

                    </div>
                    

                </div>

            )
        }

    } 



        const DishDetail = props =>  {
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if(props.dish != null)
            {
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
                            <RenderComments comment={props.comments} 
                            addComment={props.addComment}
                            dishId={props.dish.id}
                            />
                            
                           
                    </div>
                    
                    </div>
                </div>
                )
            }
           

      
       

        // const Dish = this.renderDish(dish)
        // const comment = this.renderComments(dish.comments)

        

    }
 
export default DishDetail