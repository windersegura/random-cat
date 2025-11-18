
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {

  const URL = 'https://api.thecatapi.com'
  const[count, setCount] = useState(0)
  const[cat, setCat] = useState(null)
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('effect')
    const fechData = async () => {
      setIsLoading(true);
      const response = await axios.get(URL + '/v1/images/search')
      const [result] = response.data;
      setCat(result)
      setIsLoading(false);
    }
    fechData();
  
  },[count]);
  
  return (
    <>
      <h1>Hello Cats</h1>
      <div className='image-container'>  
        { isLoading ? <h4>Loading...</h4> : <img className='image-cat' src={cat?.url} alt="no hay gato" /> }
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Next</button>
      </div>
    </>
  )
}

export default App
