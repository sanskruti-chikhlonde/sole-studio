import './App.css'
import ProductCard from './components/productCard'

function App() {

  return (
    <div>
      <ProductCard name="Nike Air Max" price={5000} />
      <ProductCard name="Adidas Superstar" price={4000} />
    </div>
  )
}
export default App