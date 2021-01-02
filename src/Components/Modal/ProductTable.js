import React ,{useState} from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ViewProduct from './ViewProduct'
import EditProductForm from './EditProductForm'

const TableBody = () => {
    const [id, setid] = useState("")
    let dispatch = useDispatch()
    const data = useSelector(state => state)

    let productlist = data.listproduct.map((row, index) => {

        
        return (
            <>
                <tr key={index} >
                    <td>{row.id}</td>
                    <td>{row.productName}</td>
                    <td>{row.productTitle}</td>
                    <td>{row.productPrice}</td>
                    <td>
                        <img className="card-img-top" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    </td>
                    <td>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"
                            onClick={() => dispatch({ type: "EDIT_PRODUCT", data: row }) && setid(row.id)}
                        >
                            Edit
                       </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => dispatch({ type: "VIEW_PRODUCT", data: row, index: index })}

                        >
                            View
                        </button>
                        {/* <button type="button" className ="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#cardModal"
                            onClick = {()=>ViewProduct()}
                        >
                            View
                        </button> */}
                    </td>
                    <td>
                        <button type="button" className="btn btn-primary"
                            onClick={() => dispatch({ type: "DELETE_PRODUCT", id: row.id })}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
                <ViewProduct />
                <EditProductForm id = {id} />
            </>
        )

    })
    return <tbody>{productlist}</tbody>

}
function ProductTable(props) {
    console.log("my props", props.productdata);
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <TableBody />
            </Table>
        </>
    )
}

export default ProductTable
