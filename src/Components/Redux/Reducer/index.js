const initialState = {
  listproduct:[],
  productitem:[],
  index:""
 
 
  
}
export default function(state = initialState, action) {

    
    switch (action.type) {
      case "ADD_PRODUCT": {
        const  {item}  = action.payload;  
        return {
          ...state,
          listproduct:[...state.listproduct , item]
        }       
      }
      case "DELETE_PRODUCT":{           
           return {
            listproduct:state.listproduct.filter(item => item.id !== action.id)
           };
      }
      case "VIEW_PRODUCT":{
   
       
        console.log("view id",action.data.id);
        state.index = action.index
       return{
        ...state,
        productitem:state.listproduct.map((item)=>{
          if(item.id == action.data.id && state.index == action.index){ 
            return item 
          }
        }) ,          
        listproduct:[...state.listproduct]

        }
        // let obj;
        // if (typeof(state.productitem)!=="object") {
          
        //   console.log("itemsss",state.productitem);
        //   obj = state.productitem.map((item)=>{
        //     if(item.id == action.id){
        //       return item
        //     }  
        //   })
        // }
        // return  {                
        //   productitem:obj,  
        //   listproduct:[...state.listproduct]
        // }
        
      
            
      }                    
      case "EDIT_PRODUCT":{
        return{
          ...state,
          productitem:state.listproduct.map((item)=>{
            if(item.id == action.data.id){ 
              return item 
            }
          }) ,          
          listproduct:[...state.listproduct]
  
        }
   
         
      }
      case "UPDATE":{

        console.log("update",action);
        return{
          ...state,
          listproduct:state.listproduct.map(item => {
            if (item.id === action.id) {
              return {
                ...item,
                productName: action.data.productName,
                productTitle: action.data.productTitle,
                productPrice:action.data.productPrice,
                productImage:action.data.productName
               
              
              };
            }else return item 
          }),
        

        } 
        
      }
      default:{
        return state;
      }
    }
}