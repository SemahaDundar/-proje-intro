import { ListGroup, ListGroupItem } from "reactstrap";





  function CategoryList(){

state ={
  categories: []
};
componentDidMount(){
  this.getCategories();
}



  getCategories = ()=>{
    fetch('https://localhost:3000/categories')
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));
  }


    return(

        <div>
            <h3>{this.props.title}</h3>

            <ListGroup>
              {this.state.categories.map(category=>{
<ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category)} 
key={category.id}>{category.categoryName}</ListGroupItem>
                })
              }
        
      
      </ListGroup>
      {/* <h4>{this.props.state.currentCategory}</h4> */}
        
        </div>
    
);

            }
    

    export default CategoryList;
