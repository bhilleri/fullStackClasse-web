import React from "react";

class Products extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        const {data, url, validateUrl} = this.props;
        return(
            <div className={this.defineClassName(data)} key={data.id}>
                <img src={validateUrl(url)? url : ""} alt="apreçu du produit"/>
                <h3>Produit : {data.name}</h3>
                <p>Description : {data.description}</p>
                <p>Prix : {data.cost}</p>
            </div>
        )
    }
    
    defineClassName(i){
        return i.cost == 500 ? "products__item product__item--500" : "products__item";
    }
}

export default Products;