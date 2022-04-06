import {useState} from 'react'

const useCont = (initialState) => {
  
    const [counter, setCounter ] = useState(initialState)
 
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = (factor=1) => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(1);
    }
    return { counter, increment, decrement, reset };
}

export default useCont
