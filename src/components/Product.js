import data from '../data';
import React from "react";

class Products extends React.Component{
    
    render(){
        const dataSample = data;
        return(
            <div className="products__item">
                <h3>Produit : {dataSample[0].name}</h3>
                <p>Description : {dataSample[0].description}</p>
                <p>Prix : {dataSample[0].cost}</p>
            </div>
        )
    }
}

export default Products;