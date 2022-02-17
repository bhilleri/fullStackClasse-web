import './App.css';
import './product.css'
import Products from './components/Product';
import { useEffect, useState } from 'react';

function App() {
  //useState is used to save data
  const [allProducts, setAllProducts] = useState([])
  const [allCategoies, setAllCategories] = useState([])
  // useEffecct is used to interact w/ data outside of the react app
  // fetch products from the API and update products state
  useEffect(()=>{
    fetch("http://localhost:9000/api/private/product")
    .then(res=>res.json())
    .then(data => setAllProducts(data))
    .catch(e => console.log(e.toString()))
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
              <Products data={allProducts} validateUrl={validateUrl} url={sampleUrl}/>

          </div>
      </main>
    </div>
  );
}

export default App;
