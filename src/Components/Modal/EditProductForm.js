import React ,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function EditProductForm(props) {
    
   
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productTitle, setProductTitle] = useState("");
    const [productImage,setProductImage] = useState("");
    
    
    console.log("id",props.id);
    let dispatch = useDispatch()


    const onHandleUpdate = (e)=>{
        console.log("items",e.target.value);
        
        e.preventDefault();
        if(e.target.name == "productName"){
            setProductName(e.target.value)
        }
        if(e.target.name == "productPrice"){
            setProductPrice(e.target.value)
        }
        if(e.target.name == "productTitle"){
            setProductTitle(e.target.value)
        }
        if(e.target.name == "productImage"){
            setProductImage(e.target.value)
        } 
     

    }
    let obj = {
        productName:productName,
        productPrice:productPrice,
        productTitle:productTitle,
        productImage:productImage

    }    
      
    const prodata = useSelector(state=>state.productitem)   
    
    
    const pro = prodata.filter((e)=>typeof(e)=="object")
    
    let prid = pro[0] ? pro[0].id : ""

   return (
      
       
        <>
      
            <div className="modal" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLongTitle">Edit Product Form</h3>
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
                                            (e)=>onHandleUpdate(e)
                                        }
                                        name = "productName"
                                        defaultValue = {pro[0] ? pro[0].productName:""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Product Price" 
                                        defaultValue = {pro[0] ? pro[0].productPrice:""}
                                        name = "productPrice"
                                        onChange = {
                                            (e)=>onHandleUpdate(e)
                                        }
                                    />                                   
                                </Form.Group>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter title" 
                                        onChange = {
                                            (e)=>onHandleUpdate(e)
                                        }
                                        defaultValue = {pro[0] ? pro[0].productTitle:""}
                                        name = "productTitle"       
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicImage">
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.File 
                                        onChange = {
                                            (e)=>onHandleUpdate(e)
                                        }
                                        placeholder="Enter Image" 
                                        name="file"
                                        label="File"
                                        name = "productImage"
                                        defaultValue = {pro[0] ? pro[0].productImage:""}
                                    />
                                </Form.Group>                               
                                <Button     variant="primary" type="submit"
                                 onClick = {()=>dispatch({ type: "UPDATE", id:prid, data: obj })}

                                 data-bs-dismiss="modal" 
                                >
                                    Save
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
       
                                       
        </>
    
    )
}

export default EditProductForm
