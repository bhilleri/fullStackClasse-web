import React from "react";
import Product from "../product/Product";

class ProductList extends React.Component{
    
    render(){
        const {data, url, validateUrl, DeleteAction, getAndSetProducts} = this.props;
        console.log(DeleteAction)
        return(
            <div className="products__container">
                {data.map(i => <Product key={i.id} data={i} url={url} validateUrl={validateUrl} getAndSetProducts={getAndSetProducts}/>)} 
            </div>
        )
    }
}

export default ProductList;