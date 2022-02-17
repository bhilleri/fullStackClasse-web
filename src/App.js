import './App.css';
import './product.css'
import Products from './components/Product';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import { getProducts } from './api/Product';

function App() {
  //useState is used to save data
  const [allProducts, setAllProducts] = useState([])
  const [allCategoies, setAllCategories] = useState([])
  // useEffecct is used to interact w/ data outside of the react app
  // fetch products from the API and update products state

  useEffect(()=>{
    getProducts().then(response => setAllProducts(response))
  },[]);
  console.log(allProducts);

  const sampleUrl = "ssh://via.placeholder.com/200/e9fff4"
function validateUrl(url){
  const parsed = new URL(url);
  return ["https:", "http:"].includes(parsed.protocol);
}

  return (
    <div className="App">
      <header className="App-header">
        <p>ESIEA | FullStack project</p>
      </header>
      <main>
          <div className="products">
            <h2 className="products__title">Produits disponibles</h2>
              <ProductList data={allProducts} validateUrl={validateUrl} url={sampleUrl}/>
          </div>
      </main>
    </div>
  );
}

export default App;
