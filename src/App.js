import React , {useState} from "react";
import './styles.css';


function App() {
  const [minVal,setMinVal] = useState(0)
  const [maxVal,setMaxVal] = useState(20)
  const [randomNum,setRandomNum] = useState(10)
  const [errMsg,setErrMsg] = useState("");
  

const minGenerateHandle = (e) => {
  setMinVal(e.target.value);
}
const maxGenerateHandle = (e) => {
  setMaxVal(e.target.value);
}

const randomGenerateHandle = () => {
  if(minVal > maxVal)
  {
    setErrMsg("The minimum number cannot be greater than the maximum number")

    return;
  }
  setErrMsg("");
  setRandomNum(Number(minVal) + Math.floor(Math.random() * (Number(maxVal) - Number(minVal) + 1)))
}

  return (  
    <div class="containerwrap">
<div className="container">
        <div className="randomNum">
          <p>Random Number : <span>{randomNum}</span></p>
        </div>
        <div className="msg">{errMsg}</div>
        <div className="numContainer">
          <div>
            <p className="min">Min:</p>
            <input type="number" value={minVal} onChange={minGenerateHandle}/>
          </div>
          <div>
            <p className="max">Max:</p>
            <input type="number" value={maxVal} onChange={maxGenerateHandle}/>
          </div>
        </div>
        <button onClick={randomGenerateHandle}>Get Random Number</button>
      </div>
    </div>
      
  );
}

export default App;
