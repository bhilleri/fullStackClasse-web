import React from "react";
import Product from "../product/Product";

class ProductList extends React.Component{

    _displayList(data, url, validateUrl, DeleteAction, getAndSetProducts){
        if(data !=  null)
            return(
                data.map(i => <Product key={i.id} data={i} url={url} validateUrl={validateUrl} getAndSetProducts={getAndSetProducts}/>)
            )
        else
                return(
                    <p>Impossible de récupérer la liste de produits auprès du serveur</p>
                )
    }
    
    render(){
        const {data, url, validateUrl, DeleteAction, getAndSetProducts} = this.props;
        console.log(DeleteAction)
        return(
            <div className="products__container">
                {this._displayList(data, url, validateUrl, DeleteAction, getAndSetProducts)} 
            </div>
        )
    }
}

export default ProductList;