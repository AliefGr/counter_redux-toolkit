import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';

const Counter = () => {
    // const [counter, setCounter] = useState(0);
    // const increment = () => {
    //     setCounter((prevCounter) => prevCounter + 1);
    // }
    // const decrement = () => {
    //     setCounter((prevCounter) => prevCounter - 1);
    // }
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value)

  return (
    <div className=''>
        <h1>Aplikasi Counter Redux Tolkit</h1>
        <div className='space-x-5 text-xl mt-5'>
            <button className='bg-slate-500' onClick={() => dispatch(increment())}>+</button>
            <span>{counter}</span>
            <button className='bg-slate-500' onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  )
}

export default Counter