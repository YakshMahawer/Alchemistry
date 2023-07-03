import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import logo from './logo.png'
import back from './back.jpg'
import CompoundImg from "./compoundImg";
import ExpResult from "./experiment_result";
import "./lab.css"
import './organic.css'

const Organic = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState(true);
  const [datanum, setDatanum] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [uans, setUAns] = useState('');
  function send_info(i){
    setFirst(false);
    setDatanum(i);
  }

  function checkAns(){
    if(uans === '1'){
      navigate("/success", {
        replace: true,
      });
    }
    else{
      setWrong(true);
      setTimeout(()=>{
        setWrong(false);
      }, 1000);
    }
  }

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setUAns(event.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="working_space lab">
        <img className="school" src={back} alt="" />
        <div className="note"><span className="note_text">NOTE: </span>All aqeuous solutions are of 1 M</div>
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="experiment_area">
          <div className="visible_exp">
            {
              (first)? <CompoundImg/>:<ExpResult num = {datanum}/>
            }
          </div>
          <div className="exp_buttons">
            <button onClick={()=> send_info(0)} className="hha">Group 0 Test</button>
            <button onClick={()=> send_info(1)} className="hha">Group 1 Test</button>
            <button onClick={()=> send_info(2)} className="hha">Group 2 Test</button>
            <button onClick={()=> send_info(3)} className="hha">Group 3 Test</button>
            <button onClick={()=> send_info(4)} className="hha">Group 4 Test</button>
            <button onClick={()=> send_info(5)} className="hha">Group 5 Test</button>
            <button onClick={()=> send_info(6)} className="hha">Group 6 Test</button>
          </div>
          <div className="input_ans">
            <p>GROUP</p>
            <input type="text" className={(wrong)? 'wrong': ''} onChange={handleChange} placeholder="ENTER GROUP NUMBER 0,1,2,3,..."/>
            <button onClick={() => {checkAns()}}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
