import React from "react";
import Products from "./Product";

class ProductList extends React.Component{
    
    render(){
        const {data, url, validateUrl} = this.props;
        return(
            <div className="products__container">
                {data.map(i => <Products key={i.id} data={i} url={url} validateUrl={validateUrl}/>)}
            </div>
        )
    }
}

export default ProductList;