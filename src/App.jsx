import Shorts from './components/shorts'

function App() {
  return (
    <div>
      <div className='hidden  lg:flex fixed top-[50px] left-[50px] '>
      <img src="https://cdn.pixabay.com/photo/2023/03/30/17/30/ai-generated-7888387_640.png" alt="img" className='h-12 w-12'/>
        <h2 className='text-2xl font-medium'>Shorts</h2>
      </div>
        <Shorts />
    </div>
  )
}

export default App