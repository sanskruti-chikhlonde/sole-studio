import './App.css'
import ProductCard from './components/productCard'
import nikeImage from './assets/nike.jpg'
import adidasImage from './assets/adidas.jpg'

function App() {

  return (
    <div>
      <ProductCard 
         name="Nike Air Max" 
         price={5000} 
         image={nikeImage}
      />

      <ProductCard 
         name="Adidas Superstar" 
         price={4000}
         image={adidasImage} 
      />
    </div>
  )
}
export default App