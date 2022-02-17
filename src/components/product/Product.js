import React from "react";
import {deleteProduct} from "../../api/ApiProduct"
import Swal from "sweetalert2";
import "./product.css"

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {},
            url: "",
        }
    }
    static getDerivedStateFromProps(props, state){
        return {data : props.data, url: props.url}
    }

    deleteProduct(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) =>{
              if(result.isConfirmed)
                deleteProduct(this.state.data.id)
                .then(()=> {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    this.props.getAndSetProducts();
                })
          })
    }

    render(){
        const {validateUrl} = this.props;
        return(
            <div className={this.defineClassName(this.state.data)} key={this.state.data.id}>
                <img src={validateUrl(this.state.url)? this.state.url : ""} alt="apreçu du produit"/>
                <h3>Produit : {this.state.data.name}</h3>
                <p>Description : {this.state.data.description}</p>
                <p>Prix : {this.state.data.cost}</p>
                <button onClick={() =>this.deleteProduct()}>Supprimer</button>
            </div>
        )
    }

    defineClassName(i){
        return i.cost === 500 ? "products__item product__item--500" : "products__item";
    }
}

export default Product;