import React from "react";

class Products extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    render(){
        const {data, url, validateUrl} = this.props;
        const productsElements = this.props.data.map(i => <div>
            <div className={this.defineClassName(i)} key={i.id}>
                <img src={validateUrl(url)? url : ""} alt="apreçu du produit"/>
                <h3>Produit : {i.name}</h3>
                <p>Description : {i.description}</p>
                <p>Prix : {i.cost}</p>
            </div>
        </div>)
        return(
            <div className="products__container">
                {productsElements}
            </div>
        )
    }
    defineClassName(i){
        return i.cost == 500 ? "products__item product__item--500" : "products__item";
    }
}

export default Products;