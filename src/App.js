import logo from './logo.svg';
import './App.css';
import data from './data';
import './product.css'
import Products from './components/Product';

function App() {

  const sampleUrl = "ssh://via.placeholder.com/200/e9fff4"
  const dataSample = data;
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
              <Products data={dataSample} validateUrl={validateUrl} url={sampleUrl}/>

          </div>
      </main>
    </div>
  );
}

export default App;
