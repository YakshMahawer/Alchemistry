import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Lab = () => {
    const navigate = useNavigate();
    const[chemA, setChemA] = useState(0);
    const[chemB, setChemB] = useState(0);
    const[chemC, setChemC] = useState(0);
    const[chemD, setChemD] = useState(0);
    return(
        <div className="lab">
            <input type="range" name="a" id="" min="0" max="100" value={chemA} onChange={(e) => {setChemA(e.target.value)}} />
            <p>{chemA}</p>
            <input type="range" name="b" id="" min="0" max="100" value={chemB} onChange={(e) => {setChemB(e.target.value)}} />
            <p>{chemB}</p>
            <input type="range" name="c" id="" min="0" max="100" value={chemC} onChange={(e) => {setChemC(e.target.value)}} />
            <p>{chemC}</p>
            <input type="range" name="d" id="" min="0" max="100" value={chemD} onChange={(e) => {setChemD(e.target.value)}} />
            <p>{chemD}</p>
            <button onClick={() => {navigate('/result', {repalce: true, state:{chemA, chemB, chemC, chemD}})}}>PLAY</button>
        </div>
    )
}

export default Lab;