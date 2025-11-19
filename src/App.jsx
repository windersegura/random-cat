
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'



function App() {

  const[count, setCount] = useState(0)
  const[cat, setCat] = useState(null)
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const fechData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        const [result] = response.data;
        if(!isCancelled){
          setCat(result)
        }
      } catch (error) {
        if(!isCancelled){
          console.log('Error fetching data: ', error)
        }
      }finally{
        if(!isCancelled){
          setIsLoading(false);
        }
      }
    };

    fechData();

    return () => {
      isCancelled = true;
    }
  
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
