import './App.css';
import Product from './Product';

function App() {
  let products = []
  for(var i = 0; i < 10; ++i){
    products.push({id: i, name: "Apple " + i, img: "https://picsum.photos/200"})
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(product => {
            return <Product product={product}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
