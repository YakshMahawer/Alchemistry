import React, {useState, useEffect} from "react";
import Sidebar from "./sidebar"
import logo from './logo.png'
import back from './back.jpg'
import hcl from "./hcl.png"
import nacl from './nacl.png'
import "./titration.css"
import "./lab.css"
import Polygon from "./Polygon";
import TitrationSetup from "./titration_setup";
import s10 from './10ss.png'
import s20 from './20ss.png'

const Titration = () => {
  const all_data = [
    {
      "reaction_id": "A",
      "points": [8, 8.5, 9, 9.5, 10],
      "color": ["#bf006b","#bb0062","#b80063","#b70061","#b8006a"]
  },
  {
      "reaction_id": "B",
      "points": [7.65, 7.9, 8.15, 8.4, 8.65, 8.9, 9.15, 9.4, 9.65, 10],
      "color": ["#bf0095", "#c2007b", "#c8007d", "#c8008b", "#be0090", "#c80086", "#b90083", "#be007c", "#c00087", "#b10080"]
  }
  ]
  const [confirm, setConirm] = useState(true);
  const [add_acid, setAddAcid] = useState(false);
  const [add_kmn, setKMN] = useState(false);
  const [lab, setLab] = useState(false);
  const [swipe, setSwipe] = useState(true);
  const [acid_heigth, setAcid] = useState("M226.348 655.637V682.121C226.348 690.679 226.535 690.688 292.472 690.688C355.57 690.688 354.8 690.675 354.8 682.121V 687.637H226.348Z");
  const [data, setData] = useState(all_data[0]);
  const [sColor, SetSColor] = useState('#FFF000')

  function setting_up_exp(){
    if(swipe){
      setData(all_data[0]);
    }
    else{
      setData(all_data[1]);
    }
  }

  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timerId;

    const startCounting = () => {
      setIsCounting(true);
      setCount(count);
      timerId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 100);
    };

    const stopCounting = () => {
      setIsCounting(false);
      clearInterval(timerId);
    };

    if (isCounting && count < 100) {
      timerId = setInterval(() => {
        var made_str = "M226.348 655.637V682.121C226.348 690.679 226.535 690.688 292.472 690.688C355.57 690.688 354.8 690.675 354.8 682.121V" + (644 - ((count/10)*4.3)) + "H226.348Z";
        setAcid(made_str);
        console.log((644 - ((count/10)*4.3)));
        setCount(prevCount => prevCount + 1);
      }, 100);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isCounting, count]);

  const handleStart = () => {
    if (!isCounting) {
      setCount(count);
      setIsCounting(true);
    }
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleShake = () =>{
    for(var i = 0; i < data.points.length; i++){
      if((count/10) >= data.points[i]){
        SetSColor(data.color[i]);
        break;
      }
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="tirtration_workplace lab">
        <img className="school" src={back} alt="" />
        <div className="note"><span className="note_text">NOTE: </span>All aqeuous solutions are of 1 M</div>
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="experiment_space">
          <div className="selection">
            <div className="choose_acid_base">
                <div className="acid_stack">
                  <p>CHOOSE ACID: </p>
                  <div className="choose_acid">
                  <button className="swipe_left" onClick={() => {setSwipe(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className = "left_choose" id="left-arrow"><path fill={swipe? '#83807d': '#F8748C'} d="M14.121 17.243a.997.997 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707Z"></path></svg>
                  </button>
                  <div className="chemical">
                    <div className="chem_logo a_border">
                      <img src={swipe? hcl: nacl} alt="" />
                    </div>
                    <div className="chem_name">
                      <p>{swipe? 'HCl': 'H2SO4'}</p>
                    </div>
                  </div>
                  <button disabled={!swipe} className="swipe_right" onClick={() => {setSwipe(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className = "right_choose" viewBox="0 0 24 24" id="right-arrow"><path fill={!swipe? '#83807d': '#F8748C'} d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12 9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293Z"></path></svg>
                  </button>
                  </div>
                </div>
                <div className="choose_base">
                    <p>BASE: </p>
                    <div className="chemical">
                    <div className="chem_logo a_border">
                      <img src={hcl} alt="" />
                    </div>
                    <div className="chem_name">
                      <p>NaOH</p>
                    </div>
                  </div>
                </div>
                <div className="confirm_acid_base">
                  <button className="t_confirm" onClick={() => {setting_up_exp()}}>CONFIRM</button>
                </div>
            </div>
            <div className="add_acid">
              <button className="add_acid_button" onClick={() => {setAcid("M226.348 655.637V682.121C226.348 690.679 226.535 690.688 292.472 690.688C355.57 690.688 354.8 690.675 354.8 682.121V 644.637H226.348Z")}}>ADD 10ml ACID</button>
            </div>
            <div className="add_indicator">
              <button className="add_indicator_button">ADD 1-2 DROPS OF KMnO4</button>
            </div>
            <div className="repeat_titration">
              <button>REPEAT</button>
            </div>
          </div>
          <div className="execution">
            <div className="scale">
              <Polygon c={count}/>
              <img src={s10} alt="" />
            </div>
            <div className="live_titration">
            <p>{count}</p>
              <div className="set_up">
                <TitrationSetup aheigth={acid_heigth} color = {sColor}/>
              </div>
              <div className="operating_buttons">
              <button className="kk"  onClick={handleStart}>START</button>
              <button className="kk"  onClick={handleStop}>STOP</button>
              <button className="kk"  onClick={handleShake}>SHAKE</button>
                <div className="play_button">
                  <span class="video-game-button t_game"><i>DROP</i></span>
                  <button className = "play">PLAY</button>
                </div>
                <div className="play_button">
                  <span class="video-game-button t_game"><i>STOP</i></span>
                  <button className = "play">PLAY</button>
                </div>
                <div className="play_button">
                  <span class="video-game-button t_game"><i>SHAKE</i></span>
                  <button disabled="true" className = "play">PLAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titration;
