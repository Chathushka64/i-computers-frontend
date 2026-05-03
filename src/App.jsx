import './App.css'
import ProductCard from './components/productCard'

function App() {

  return (
    <div className='w-[700px] h-[700px] bg-yellow-300'>

      <div className='w-[600px] h-[600px] bg-gray-400 '>

        <div className='w-[100px] h-[100px] bg-blue-700'></div>
        <div className='w-[100px] h-[100px] bg-red-700'></div>
        <div className='w-[100px] h-[100px] bg-white'></div>
        <div className='w-[100px] h-[100px] bg-green-700'></div>
        <div className='w-[100px] h-[100px] bg-black'></div>
      </div>
    </div>
  )
}

export default App
