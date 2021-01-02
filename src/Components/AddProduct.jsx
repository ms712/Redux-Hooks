import React ,{useState} from 'react'
import AddProductForm from './Modal/AddProductForm'
import { useDispatch } from 'react-redux'

function AddProduct() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productTitle, setproductTitle] = useState("");
    const [productImage,setProductImage] = useState("");
    // const [itemList,setItemList] = useState([])
    let dispatch = useDispatch()

    const onUpdateInput = (e)=>{
        console.log("items",e.target.value)
        e.preventDefault();
        if(e.target.name == "productName"){
            setProductName(e.target.value)
        }
        if(e.target.name == "productPrice"){
            setProductPrice(e.target.value)
        }
        if(e.target.name == "productTitle"){
            setproductTitle(e.target.value)
        }
        if(e.target.name == "productImage"){
            setProductImage(e.target.value)
        }     

    }

    const onHandleInput = (e) =>{
      
        e.preventDefault();

        // let allitem = []
        let item = {
            productName:productName,
            productPrice:productPrice,
            productTitle:productTitle,
            productImage:productImage,
            id:Date.now()
        }
        
        // setItemList(item)
        // allitem.push(item)
       let value  = dispatch(
            { 
                type: 'ADD_PRODUCT',
                payload:{
                    item
                }
                
                        
            }    
        )
       

    }


    return (
        <>
            <AddProductForm                
                onUpdateInput = {onUpdateInput}
                onHandleInput = {onHandleInput}
            />
        </>
    )
}

export default AddProduct
