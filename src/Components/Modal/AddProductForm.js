import React from 'react'
import {Form,Button} from 'react-bootstrap'
function AddProductForm(props) {
    return (
        <>

       
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLongTitle">Add Product Form</h3>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <Form.Group controlId="formBasicProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Product Name" 
                                        onChange = {
                                            (e)=>props.onUpdateInput(e)
                                        }
                                        name = "productName"    
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Product Price" 
                                        onChange = {
                                            (e)=>props.onUpdateInput(e)
                                        }
                                        name = "productPrice"
                                    />                                   
                                </Form.Group>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter title" 
                                        onChange = {
                                            (e)=>props.onUpdateInput(e)
                                        } 
                                        name = "productTitle"       
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicImage">
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.File 
                                      
                                        placeholder="Enter Image" 
                                        name="file"
                                        label="File"
                                        onChange = {
                                            (e)=>props.onUpdateInput(e)
                                        }
                                        name = "productImage"
                                    />
                                </Form.Group>                               
                                <Button     variant="primary" type="submit"
                                 onClick = {(e)=>props.onHandleInput(e)}
                                 data-bs-dismiss="modal" 
                                >
                                    Add
                                </Button>
                            </Form>
                       
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Add Product</button> */}
                        </div>
                    </div>
                </div>
            </div>
       
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
        
            
            >
                Add Product
            </button>                           
        </>
    )
}

export default AddProductForm
