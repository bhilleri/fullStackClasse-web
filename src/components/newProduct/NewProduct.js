import React from "react";
import "./newProduct.css"
import { postProduct } from '../../api/ApiProduct';
class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newProduct: {
                name: "",
                description: "",
                cost: 0,
                categories:[],
                error: ""
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {type, name, value} = event.target;
        if(type === "number")
        {
            if(value.match(/^[0-9]+$/)){
                let newProduct = this.state.newProduct;
                newProduct[name] = Number(value.replace(/^0+/, ''));
                this.setState({
                    newProduct: newProduct
                });
            }else if(value === ""){
                let newProduct = this.state.newProduct;
                newProduct[name] = Number(0);
                this.setState({
                    newProduct: newProduct
                });
            }else{
                this.setState({error: "Cost must be a number"});
            }
        }
        else{
            if(value.match(/[<>\/\\]/))
                this.setState({error: "Cost must be a number"});
            else if(value.length > 255){
                this.setState({error: "Max characters is 255"});
            }
            else{
                let newProduct = this.state.newProduct;
                newProduct[name] = (value);
                this.setState({
                    newProduct: newProduct
                });
            }
        }
    }

    submitProduct = () =>{
        postProduct(this.state.newProduct)
        .then(()=>{
            this.props.getAndSetProducts();
        })
    }

    render(){
        return(
            <div className="newProduct__form">
                <h3 className="newProduct__title">Ajouter un produit</h3>

                <div className="newProduct__container">
                    <label>Nom du produit : </label>
                    <input 
                        type="text" 
                        className="newProduct__input"
                        placeholder="nom du produit"
                        name="name"
                        value={this.state.newProduct.name}
                        onChange={this.handleChange}/>
                </div>

                <div className="newProduct__container">
                    <label>Prix du produit : </label>
                    <input 
                        type="number" 
                        className="newProduct__input"
                        name="cost"
                        value={this.state.newProduct.cost}
                        onChange={this.handleChange}
                        />
                </div>

                <textarea 
                className="newProduct__container"
                placeholder="newproduct__input"
                name="description"
                value={this.state.newProduct.description}
                onChange={this.handleChange}
                />
                <button className="newProduct__submitButton" onClick={this.submitProduct}>Ajouter</button>
                {this.state.error && <p className="newProduct__error">{this.state.error}</p>}
            </div>
        )
    }
}

export default NewProduct