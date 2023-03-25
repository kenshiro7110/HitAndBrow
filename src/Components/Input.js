import {  useContext, useState } from "react";
import { Global } from '../App';
import '../css/Input.css';
const Input = () => {
  const { UserAnswer,Selected, setSelected } = useContext(Global);
  const class_toggle = [0,0,0,0];
  class_toggle[Selected]=1;

  return (
    <>
      <div className="input_component">
        <ul className="user_answer">
          <li className={class_toggle[0] ? 'on':'off'} onClick={() => { setSelected(0) }}>{UserAnswer[0]}</li>
          <li className={class_toggle[1] ? 'on':'off'} onClick={() => { setSelected(1) }}>{UserAnswer[1]}</li>
          <li className={class_toggle[2] ? 'on':'off'} onClick={() => { setSelected(2) }}>{UserAnswer[2]}</li>
          <li className={class_toggle[3] ? 'on':'off'} onClick={() => { setSelected(3) }}>{UserAnswer[3]}</li>
        </ul>
      </div>
    </>
  );
}
export default Input;