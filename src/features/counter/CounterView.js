import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)


    const dispatch = useDispatch()
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vero maxime harum, quod minus omnis suscipit recusandae quisquam enim quis vel, eaque quo fugit nam eius ex totam iste. Sequi!</p>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increaseByAmount(5))}>Increase 5</button>
        </div>
    );
};

export default CounterView;