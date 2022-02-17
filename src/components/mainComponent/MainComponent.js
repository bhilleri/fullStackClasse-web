import '../../App.css';
import '../product/product.css'
import ProductList from '../productList/ProductList';
import { getProducts, postProduct, deleteProduct } from '../../api/ApiProduct';
import NewProduct from '../newProduct/NewProduct';

import React from 'react';

const sampleUrl = "ssh://via.placeholder.com/200/e9fff4"
class MainComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allProduct: [],
            allCategoies : []
        }
    }
    componentDidMount(){
        this.getAndSetProducts();
    }

    getAndSetProducts = () =>{
        getProducts().then(data => this.setState({allProduct : data}))
    }

    validateUrl(url){
        const parsed = new URL(url);
        return ["https:", "http:"].includes(parsed.protocol);
    }

    render(){
        return(
        <div className="products">
            <h2 className="products__title">Produits disponibles</h2>
            <ProductList data={this.state.allProduct} validateUrl={this.validateUrl} url={sampleUrl}/>
            <NewProduct getAndSetProducts={this.getAndSetProducts}/>
        </div>
        )
    }
}


export default MainComponent;