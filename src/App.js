import React ,{useState} from "react";
import "./style.css";

let colortog=false
export default function App() {

  const [Color,SetColor]=useState('color1')

  function changecolor(){
    
    colortog=!colortog
    if(colortog){
      SetColor('color2')
    }
    else{
      SetColor('color1')
    }
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={changecolor}>click</button>
      <h2 className={Color}>Justin Sam</h2>
    </div>
  );
}
