import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, reset, incrementByAmount  } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [delta, setDelta] = useState(10);

  console.log(`Counter $count`);

  const resetAll =() => {
    setDelta(0);
    dispatch(reset());
  }
  return (
    <>
    <section>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      </section>
      <br></br>
      <section>
        <p>
          <input type="text" value={delta} onChange={(e) => setDelta(e.target.value)} />
          </p>
        <button onClick={()=>dispatch(incrementByAmount(Number(delta)))}>Add Amount</button>
        <button onClick={() => dispatch(incrementByAmount(-Number(delta)))}>Subtract Amount</button>
        <button onClick={()=>resetAll()}>Reset</button>
    </section>
      </>
  );
}

export default Counter;
