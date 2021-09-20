import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  let products = []
  for (var i = 0; i < 12; ++i) {
    products.push({ id: i, name: "Apple " + i, img: "https://picsum.photos/200", description: "description" })
  }
  const col_num = 4
  const createGrid = () => {
    let grid = []
    for (let i = 0; i < products.length; ++i) {
      if (i % col_num === 0) {
        grid.push([])
      }
      grid[parseInt(i / col_num)].push(products[i])
    }
    return grid
  }
  const rows = createGrid()

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {
            rows.map(cols => {
              return (
                <Row>
                  {
                    cols.map(col => {
                      return (<Col>
                        <Product product={col} />
                      </Col>)
                    })
                  }
                </Row>
              )
            })
          }
        </Container>
      </header>
    </div>
  );
}

export default App;
