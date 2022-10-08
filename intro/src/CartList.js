import { Component } from "react";
import { Button } from "reactstrap";




export default class CartList extends Component{
    renderCart(){
        return(
            <Table atriped>
                <tr>
                    <th>#</th>
                <th>category Id</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Unit In Stock</th>
                <th>Quantity</th>
                <th><Button color="danger" onclick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button></th>

                

                
                
                </tr>
                <tbody>
                    {
                        this.props.cart.map(cartItem=>(
                            <tr key={cartItem.product.id}>
                                   <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                              
                             

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render(){
        return(
            <div>{this.renderCart()}</div>
        )
    }
}