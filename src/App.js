import './App.css';
import './components/product/product.css'
import Header from './components/header/Header';
import MainComponent from './components/mainComponent/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <MainComponent/>
      </main>
    </div>)

}

export default App;
