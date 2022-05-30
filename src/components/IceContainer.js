  import { useSelector, useDispatch } from "react-redux";
import { buyIce} from "../components/redux/index";
function IceHook() {
  const noofice = useSelector((state) => state.ice.noofice);
  const dispatch = useDispatch();
  
  return (
    <div>
       <h2>No of Ice {noofice}</h2>
      <button onClick={() => dispatch(buyIce())}>buy ice </button>
      
    </div>
  );
}

export default IceHook;
