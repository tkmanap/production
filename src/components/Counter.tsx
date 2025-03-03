import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            {count}
            <button onClick={increment}>incr</button>
        </div>
    );
};

export default Counter;