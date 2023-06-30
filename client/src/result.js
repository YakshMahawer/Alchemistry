import React, {useState, useEffect, } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import ResultCustomTestTube from './result_testtube'
import Sidebar from './sidebar'
import labgif from './labgif.gif'
import cloud from './cloud.png'
import boom from './boom.gif'
import logo from './logo.png'
import Bubble from './banner'
import back from './back.jpg'
import './result.css'

const Result = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const chemh = "M 218.985 165.204 V 384.283 C 218.985 397.931 232.87 409 250.003 409 C 267.136 409 281.02 397.935 281.02 384.283 V" + (387.28 - (location.state.chemA + location.state.chemB + location.state.chemC + location.state.chemD)*3.3) + "H 218.985 Z";

    const [data, setData] = useState();
    useEffect(() => {
        fetch("/result/" + location.state.chemA + "/" + location.state.chemB + '/' + location.state.chemC + '/' + location.state.chemD).then(
          response => response.json()
        ).then(
          data => {
            setData(data)
          }
        )
      }, [])
    return(
        <div>
        
           {
                (typeof data === "undefined")?
                (
                    <div className="loading">
                      <img src={labgif} alt="" />
                    </div>
                ):
                <div className='result_lab'>
                  <Sidebar />
                  <img className="school" src={back} alt="" />
                  <div className="bubbles"><Bubble /></div>
                  {
                    data.map((item, index) => (
                    <div className="result_section">
                    <div className="boom">
                      <img src={boom} alt="" />
                    </div>
                    <div className="note">NOTE: All the results are revelent for normal temperature.</div>
                    <div className = 'result' key={index}>
                      <div className="concentration_info">
                      <div className="result_logo"><img src={logo} alt="" /></div>
                        <div className="chemical_input">
                          <div className="box_color box_hcl"></div>
                          <div className="box_name">Conc. HCl</div>
                          <div className="box_progress">
                            <progress id="file" value={location.state.chemA} max="100"> 32% </progress>
                            <span>{location.state.chemA}%</span>
                          </div>
                        </div>
                        <div className="chemical_input">
                          <div className="box_color box_nacl"></div>
                          <div className="box_name">NaCl</div>
                          <div className="box_progress">
                            <progress id="file" value={location.state.chemB} max="100"> 32% </progress>
                            <span>{location.state.chemB}%</span>
                          </div>
                        </div>
                        <div className="chemical_input">
                          <div className="box_color box_cuso4"></div>
                          <div className="box_name">CuSO4</div>
                          <div className="box_progress">
                            <progress id="file" value={location.state.chemC} max="100"> 32% </progress>
                            <span>{location.state.chemC}%</span>
                          </div>
                        </div>
                        <div className="chemical_input">
                          <div className="box_color box_feso4"></div>
                          <div className="box_name">FeSO4</div>
                          <div className="box_progress">
                            <progress id="file" value={location.state.chemD} max="100"> 32% </progress>
                            <span>{location.state.chemD}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="testube_info">
                          <div className="result_smell">
                          <img src={cloud} alt="" />
                          <div className="result_smell_text">{(location.state.chemA > 0)? "Pungent Smell Due to HCl": "No Specific Smell"}</div>
                          </div>
                          <div className="result_equation">{item.result}</div>
                          <div className="resultant_testtube">
                            <ResultCustomTestTube color={item.color} solid_color={item.solid_color} gas_color={item.gas_color} gas={item.gas} solid={item.solid} str= {chemh}/>
                          </div>
                          <div className="next_experiment">
                            <button className='next' onClick={()=>{navigate("/lab")}}>NEXT EXPERIMENT</button>
                          </div>
                      </div>
                      {
                        (item.product_name === "")?<div>No Products Formed</div>:<div className="product_info">
                          <div className="product_text">Product Info.</div>
                          <div className="p_heading">{item.product_name}</div>
                          <div className="information">{item.product_info}</div>
                          <div className="properties_text"><i class="fa-solid fa-dna" style={{color: "#0d0d0d"}}></i> Properties</div>
                          <div className="product_properties">
                            {
                              item.product_properties.map((type, index) => {
                              return <p key={index} className='list'>- {type}</p>
                            })
                            }
                          </div>
                          <div className="uses_text"><i class="fa-solid fa-mortar-pestle" style={{color: "#0d0d0d"}}></i> Uses</div>
                          <div className="product_uses">
                            {
                              item.product_uses.map((type, index) => {
                              return <p key={index} className='list'>- {type}</p>
                            })
                            }
                          </div>
                      </div>
                      }
                    </div>
                    </div>
                    ))
                  }
                </div>
            }
        </div>
    )
}

export default Result;