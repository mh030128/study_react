import { useState } from "react";

function TestComp() {
    const [count, setCount] = useState(0);

    const onIncreate = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h4>Test Component</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={onIncreate}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default TestComp ;