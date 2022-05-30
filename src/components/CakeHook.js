import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake } from "./redux";
function CakeHook() {
  const noofcakes = useSelector((state) => state.cake.noofCakes);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  return (
    <div>
      {noofcakes < 1 ? <h2>Out OF Stock</h2> : <h2>No of Cakes {noofcakes}</h2>}
      <button onClick={() => dispatch(buyCake(count))}>buy cake </button>
      <input
        type="String"   
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => dispatch(restockCake(count))}>
        restock cake{" "}
      </button>
    </div>
  );
}

export default CakeHook;
