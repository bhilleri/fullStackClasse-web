import logo from './logo.svg';
import './App.css';
import data from './data';
import './product.css'
import Products from './components/Product';

function App() {

    

  return (
    <div className="App">
      <header className="App-header">
        <p>ESIEA | FullStack project</p>
      </header>
      <main>
          <div className="products">
            <h2 className="products__title">Produits disponibles</h2>
            <div className="products__container">
              <Products/>
            </div>

          </div>
      </main>
    </div>
  );
}

export default App;
