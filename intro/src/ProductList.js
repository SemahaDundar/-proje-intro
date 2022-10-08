import { Table, Button} from "reactstrap";


  return (
    <div>
      <h3>
        {this.props.info.title}- {this.props.state.currentCategory}
      </h3>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units in Stock</th>
          </tr>

          {this.props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.producName}</td>
              <td>{product.unitePrice}</td>
              <td>{product.unitPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
            
            <Button onClick={()=>this.props.addToCart} color="info">add</Button>
          </td>
            </tr>
          ))}

          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );


export default ProductList;
