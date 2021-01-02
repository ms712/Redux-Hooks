import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

function ViewProduct() {
    const data = useSelector(state => state.productitem)

     
    let pro = data.filter((e)=>typeof(e)=="object") 
        
               
      
      
     

    
    
    console.log("item",pro);
    
    return (

        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"   aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{pro[0] ? pro[0].productTitle : ""}</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card" Style="width: 18rem;">            
                                <img className="card-img-top" src= "https://placeimg.com/640/480/any" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Price:{pro[0] ? pro[0].productPrice:""}</h5>
                                    <p className="card-text"><h3></h3>{pro[0] ?pro[0].productName:""}</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewProduct
